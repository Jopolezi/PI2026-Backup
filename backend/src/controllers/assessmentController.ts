import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Assessment } from "../models/Assessment";
import { Establishment } from "../models/Establishment";
import { Scheduling, SchedulingStatus } from "../models/Scheduling";
import { removePassword } from "../utils/user/removePassword";

const assessmentRepo = AppDataSource.getRepository(Assessment);
const establishmentRepo = AppDataSource.getRepository(Establishment);
const schedulingRepo = AppDataSource.getRepository(Scheduling);

export const createAssessment = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        const { establishmentId, schedulingId, rating, comment } = req.body;

        if (!establishmentId || !rating) {
            return res.status(400).json({ error: "Preencha todos os campos" });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ error: "Nota deve ser entre 1 e 5" });
        }

        const establishment = await establishmentRepo.findOne({
            where: { id: establishmentId }
        });

        if (!establishment) {
            return res.status(404).json({ error: "Estabelecimento não encontrado" });
        }

        if (schedulingId) {
            const scheduling = await schedulingRepo.findOne({
                where: {
                    id: schedulingId,
                    user: { id: userId },
                    status: SchedulingStatus.COMPLETED
                }
            });

            if (!scheduling) {
                return res.status(400).json({ error: "Agendamento não encontrado ou não concluído" });
            }
        }

        const alreadyExists = await assessmentRepo.findOne({
            where: {
                user: { id: userId },
                establishment: { id: establishmentId },
                ...(schedulingId && { scheduling: { id: schedulingId } })
            }
        });

        if (alreadyExists) {
            return res.status(400).json({ error: "Você já avaliou este estabelecimento" });
        }

        const assessment = assessmentRepo.create({
            user: { id: userId },
            establishment,
            rating,
            comment,
            ...(schedulingId && { scheduling: { id: schedulingId } })
        });

        await assessmentRepo.save(assessment);

        return res.status(201).json(assessment);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const getAssessmentsByEstablishment = async (req: Request, res: Response) => {
    try {

        const establishmentId = Number(req.params.establishmentId);

        if (isNaN(establishmentId)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const assessments = await assessmentRepo.find({
            where: { establishment: { id: establishmentId } },
            relations: ["user"],
            order: { createdAt: "DESC" }
        });

        const result = assessments.map(a => ({
            ...a,
            user: removePassword(a.user)
        }));

        const average = assessments.length > 0
            ? assessments.reduce((sum, a) => sum + a.rating, 0) / assessments.length
            : 0;

        return res.json({
            average: parseFloat(average.toFixed(1)),
            total: assessments.length,
            assessments: result
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const deleteAssessment = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const assessment = await assessmentRepo.findOne({
            where: { id },
            relations: ["user"]
        });

        if (!assessment) {
            return res.status(404).json({ error: "Avaliação não encontrada" });
        }

        if (assessment.user.id !== userId) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        await assessmentRepo.remove(assessment);

        return res.json({ message: "Avaliação deletada" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};