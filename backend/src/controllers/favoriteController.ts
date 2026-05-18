import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Company } from "../models/Favorite";
import { User } from "../models/User";

export const createFavorite = async (req: Request, res: Response) => {
    try {

    } catch {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
}

export const getFavorite = async (req: Request, res: Response) => {
    try {

    } catch {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
}

export const getFavoriteBiId = async (req: Request, res: Response) => {
    try {

    } catch {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
}

export const deleteFavorite = async (req: Request, res: Response) => {
    try {

    } catch {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
}