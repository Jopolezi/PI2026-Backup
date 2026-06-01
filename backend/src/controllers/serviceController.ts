import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Service } from "../models/Service";
import { Establishment } from "../models/Establishment";

const serviceRepo = AppDataSource.getRepository(Service);
const establishmentRepo = AppDataSource.getRepository(Establishment);

export const createService = async (req: Request, res: Response) => {
    try {

        const ownerId = (req as any).user.id;
        const { name, description, price, duration, establishmentId } = req.body;

        if (!name || !price || !duration || !establishmentId) {
            return res.status(400).json({ error: "Preencha todos os campos" });
        }

        const establishment = await establishmentRepo.findOne({
            where: { id: establishmentId },
            relations: ["company", "company.owner"]
        });

        if (!establishment) {
            return res.status(404).json({ error: "Estabelecimento não encontrado" });
        }

        if (establishment.company.owner.id !== ownerId) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        const service = serviceRepo.create({
            name,
            description,
            price,
            duration,
            establishment
        });

        await serviceRepo.save(service);

        return res.status(201).json(service);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const getServicesByEstablishment = async (req: Request, res: Response) => {
    try {

        const establishmentId = Number(req.params.establishmentId);

        if (isNaN(establishmentId)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const services = await serviceRepo.find({
            where: { establishment: { id: establishmentId } }
        });

        return res.json(services);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const getServiceById = async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const service = await serviceRepo.findOne({
            where: { id },
            relations: ["establishment"]
        });

        if (!service) {
            return res.status(404).json({ error: "Serviço não encontrado" });
        }

        return res.json(service);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const updateService = async (req: Request, res: Response) => {
    try {

        const ownerId = (req as any).user.id;
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const service = await serviceRepo.findOne({
            where: { id },
            relations: ["establishment", "establishment.company", "establishment.company.owner"]
        });

        if (!service) {
            return res.status(404).json({ error: "Serviço não encontrado" });
        }

        if (service.establishment.company.owner.id !== ownerId) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        const { name, description, price, duration } = req.body;

        if (name) service.name = name;
        if (description) service.description = description;
        if (price) service.price = price;
        if (duration) service.duration = duration;

        await serviceRepo.save(service);

        return res.json(service);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};

export const deleteService = async (req: Request, res: Response) => {
    try {

        const ownerId = (req as any).user.id;
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const service = await serviceRepo.findOne({
            where: { id },
            relations: ["establishment", "establishment.company", "establishment.company.owner"]
        });

        if (!service) {
            return res.status(404).json({ error: "Serviço não encontrado" });
        }

        if (service.establishment.company.owner.id !== ownerId) {
            return res.status(403).json({ error: "Sem permissão" });
        }

        await serviceRepo.remove(service);

        return res.json({ message: "Serviço deletado" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro no servidor" });
    }
};