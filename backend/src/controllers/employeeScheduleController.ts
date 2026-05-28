import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { EmployeeSchedule } from "../models/EmployeeSchedule";
import { Employe } from "../models/Employe";

const scheduleRepo = AppDataSource.getRepository(EmployeeSchedule);
const employeRepo = AppDataSource.getRepository(Employe);

export const createSchedule = async (req: Request, res: Response) => {
    try {

        const ownerId = (req as any).user.id;
        const { employeId, dayOfWeek, startTime, endTime } = req.body;

        if (dayOfWeek === undefined || !startTime || !endTime || !employeId) {
            return res.status(400).json({ error: "Preencha todos os campos" });
        }

        const employe = await employeRepo.findOne({
            where: { id: employeId },
            relations: ["establishment", "establishment.company", "establishment.company.owner"]
        });

        if (!employe) {
            return res.status(404).json({ error: "Funcionário não encontrado" });
        }

        if (employe.establishment.company.owner.id !== ownerId) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        const schedule = scheduleRepo.create({ employe, dayOfWeek, startTime, endTime });
        await scheduleRepo.save(schedule);

        return res.status(201).json(schedule);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const getSchedulesByEmploye = async (req: Request, res: Response) => {
    try {

        const employeId = Number(req.params.employeId);

        if (isNaN(employeId)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const schedules = await scheduleRepo.find({
            where: { employe: { id: employeId } }
        });

        return res.json(schedules);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const deleteSchedule = async (req: Request, res: Response) => {
    try {

        const ownerId = (req as any).user.id;
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const schedule = await scheduleRepo.findOne({
            where: { id },
            relations: ["employe", "employe.establishment", "employe.establishment.company", "employe.establishment.company.owner"]
        });

        if (!schedule) {
            return res.status(404).json({ error: "Horário não encontrado" });
        }

        if (schedule.employe.establishment.company.owner.id !== ownerId) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        await scheduleRepo.remove(schedule);

        return res.json({ message: "Horário removido" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};