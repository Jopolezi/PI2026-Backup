import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Favorite } from "../models/Favorite";
import { Establishment } from "../models/Establishment";

const favoriteRepo = AppDataSource.getRepository(Favorite);
const establishmentRepo = AppDataSource.getRepository(Establishment);

export const addFavorite = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        const { establishmentId } = req.body;

        if (!establishmentId) {
            return res.status(400).json({ error: "establishmentId é obrigatório" });
        }

        const establishment = await establishmentRepo.findOne({
            where: { id: establishmentId }
        });

        if (!establishment) {
            return res.status(404).json({ error: "Estabelecimento não encontrado" });
        }

        const alreadyFavorited = await favoriteRepo.findOne({
            where: {
                user: { id: userId },
                establishment: { id: establishmentId }
            }
        });

        if (alreadyFavorited) {
            return res.status(400).json({ error: "Estabelecimento já favoritado" });
        }

        const favorite = favoriteRepo.create({
            user: { id: userId },
            establishment
        });

        await favoriteRepo.save(favorite);

        return res.status(201).json(favorite);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const getMyFavorites = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;

        const favorites = await favoriteRepo.find({
            where: { user: { id: userId } },
            relations: ["establishment"],
            order: { createdAt: "DESC" }
        });

        return res.json(favorites);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const removeFavorite = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).user.id;
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const favorite = await favoriteRepo.findOne({
            where: { id },
            relations: ["user"]
        });

        if (!favorite) {
            return res.status(404).json({ error: "Favorito não encontrado" });
        }

        if (favorite.user.id !== userId) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        await favoriteRepo.remove(favorite);

        return res.json({ message: "Favorito removido" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};  