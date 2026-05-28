import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Scheduling, SchedulingStatus } from "../models/Scheduling";
import { Employe } from "../models/Employe";
import { Service } from "../models/Service";
import { EmployeeSchedule } from "../models/EmployeeSchedule";
import { removePassword } from "../utils/user/removePassword";
import { createNotification } from "../services/notificationService";
import { NotificationType } from "../models/Notification";

const schedulingRepo = AppDataSource.getRepository(Scheduling);
const employeRepo = AppDataSource.getRepository(Employe);
const serviceRepo = AppDataSource.getRepository(Service);
const scheduleRepo = AppDataSource.getRepository(EmployeeSchedule);

export const getAvailableSlots = async (req: Request, res: Response) => {
    try {

        const { employeId, serviceId, date } = req.query;

        if (!employeId || !serviceId || !date) {
            return res.status(400).json({ error: "employeId, serviceId e date são obrigatórios" });
        }

        const dayOfWeek = new Date(date as string).getDay();

        const workSchedule = await scheduleRepo.findOne({
            where: {
                employe: { id: Number(employeId) },
                dayOfWeek
            }
        });

        if (!workSchedule) {
            return res.json({ slots: [], message: "Funcionário não trabalha nesse dia" });
        }

        const service = await serviceRepo.findOne({ where: { id: Number(serviceId) } });

        if (!service) {
            return res.status(404).json({ error: "Serviço não encontrado" });
        }

        const existingSchedulings = await schedulingRepo.find({
            where: {
                employe: { id: Number(employeId) },
                date: date as string,
                status: SchedulingStatus.PENDING
            }
        });

        const slots = generateSlots(
            workSchedule.startTime,
            workSchedule.endTime,
            service.duration,
            existingSchedulings
        );

        return res.json({ slots });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

const generateSlots = (
    startTime: string,
    endTime: string,
    duration: number,
    existingSchedulings: Scheduling[]
): string[] => {

    const slots: string[] = [];

    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);

    let current = startHour * 60 + startMin;
    const end = endHour * 60 + endMin;

    while (current + duration <= end) {
        const hour = Math.floor(current / 60).toString().padStart(2, "0");
        const min = (current % 60).toString().padStart(2, "0");
        const slot = `${hour}:${min}`;

        const isOccupied = existingSchedulings.some(s => s.startTime === slot);

        if (!isOccupied) {
            slots.push(slot);
        }

        current += duration;
    }

    return slots;
};

export const createScheduling = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        const { employeId, serviceId, date, startTime } = req.body;

        if (!employeId || !serviceId || !date || !startTime) {
            return res.status(400).json({ error: "Preencha todos os campos" });
        }

        const employe = await employeRepo.findOne({
            where: { id: employeId },
            relations: ["user"]
        });

        if (!employe) {
            return res.status(404).json({ error: "Funcionário não encontrado" });
        }

        const service = await serviceRepo.findOne({ where: { id: serviceId } });

        if (!service) {
            return res.status(404).json({ error: "Serviço não encontrado" });
        }

        const conflict = await schedulingRepo.findOne({
            where: {
                employe: { id: employeId },
                date,
                startTime,
                status: SchedulingStatus.PENDING
            }
        });

        if (conflict) {
            return res.status(400).json({ error: "Horário já ocupado" });
        }

        const [startHour, startMin] = startTime.split(":").map(Number);
        const totalMin = startHour * 60 + startMin + service.duration;
        const endHour = Math.floor(totalMin / 60).toString().padStart(2, "0");
        const endMin = (totalMin % 60).toString().padStart(2, "0");
        const endTime = `${endHour}:${endMin}`;

        const scheduling = schedulingRepo.create({
            user: { id: userId },
            employe,
            service,
            date,
            startTime,
            endTime,
            status: SchedulingStatus.PENDING
        });

        await schedulingRepo.save(scheduling);

        await createNotification(
            userId,
            NotificationType.SCHEDULING_CREATED,
            "Agendamento criado!",
            `Seu agendamento para ${service.name} foi criado com sucesso.`
        );

        await createNotification(
            employe.user.id,
            NotificationType.SCHEDULING_CREATED,
            "Novo agendamento!",
            `Você tem um novo agendamento para ${service.name} em ${date} às ${startTime}.`
        );

        return res.status(201).json(scheduling);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const getMySchedulings = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;

        const schedulings = await schedulingRepo.find({
            where: { user: { id: userId } },
            relations: ["employe", "employe.user", "service", "service.establishment"],
            order: { date: "ASC" }
        });

        const result = schedulings.map(s => ({
            ...s,
            employe: { ...s.employe, user: removePassword(s.employe.user) }
        }));

        return res.json(result);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const getSchedulingsByEmploye = async (req: Request, res: Response) => {
    try {

        const employeId = Number(req.params.employeId);

        if (isNaN(employeId)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const schedulings = await schedulingRepo.find({
            where: { employe: { id: employeId } },
            relations: ["user", "service"],
            order: { date: "ASC" }
        });

        const result = schedulings.map(s => ({
            ...s,
            user: removePassword(s.user)
        }));

        return res.json(result);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const updateSchedulingStatus = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        const id = Number(req.params.id);
        const { status } = req.body;

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        if (!Object.values(SchedulingStatus).includes(status)) {
            return res.status(400).json({ error: "Status inválido" });
        }

        const scheduling = await schedulingRepo.findOne({
            where: { id },
            relations: ["user", "employe", "employe.user"]
        });

        if (!scheduling) {
            return res.status(404).json({ error: "Agendamento não encontrado" });
        }

        const isOwner = scheduling.user.id === userId;
        const isEmploye = scheduling.employe.user.id === userId;

        if (!isOwner && !isEmploye) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        if (isOwner && status !== SchedulingStatus.CANCELLED) {
            return res.status(403).json({ error: "Usuário só pode cancelar agendamento" });
        }

        scheduling.status = status;
        await schedulingRepo.save(scheduling);

        const messages: Record<string, string> = {
            confirmed: "Seu agendamento foi confirmado!",
            cancelled: "Seu agendamento foi cancelado.",
            completed: "Seu agendamento foi concluído!"
        };

        const types: Record<string, NotificationType> = {
            confirmed: NotificationType.SCHEDULING_CONFIRMED,
            cancelled: NotificationType.SCHEDULING_CANCELLED,
            completed: NotificationType.SCHEDULING_CONFIRMED
        };

        if (messages[status]) {
            await createNotification(
                scheduling.user.id,
                types[status],
                messages[status],
                messages[status]
            );
        }

        return res.json(scheduling);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};