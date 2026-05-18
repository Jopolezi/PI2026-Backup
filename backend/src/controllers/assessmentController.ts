import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Company } from "../models/Assessment";
import { User } from "../models/User";

export const createAssessment = async (req: Request, res: Response) => {
    try {

    } catch {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
}

export const getAssessment = async (req: Request, res: Response) => {
    try {

    } catch {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
}

export const getAssessmentBiId = async (req: Request, res: Response) => {
    try {

    } catch {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
}

export const deleteAssessment = async (req: Request, res: Response) => {
    try {

    } catch {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
}