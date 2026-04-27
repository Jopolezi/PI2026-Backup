import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Company } from "../models/Company";
import { User } from "../models/User";

const repo = AppDataSource.getRepository(Company);
const userRepo = AppDataSource.getRepository(User);

export const createCompany = async (req: Request, res: Response) => {
  try {
    const { name, cnpj, description, phone, address, city, state } = req.body;

    if (!name || !cnpj || !description || !phone || !address || !city || !state) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }

    const existingCompany = await repo.findOneBy({ cnpj });
    if (existingCompany) {
      return res.status(400).json({ error: "CNPJ já cadastrado" });
    }

    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Não autenticado" });
    }

    const user = await userRepo.findOneBy({ id: userId });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (!user.isCompany) {
      return res.status(403).json({ error: "Você precisa de um plano" });
    }

    const fullAddress = `${address}, ${city}, ${state}`;

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}`
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Erro ao buscar localização" });
    }

    const geodata = await response.json() as any[];

    if (!geodata || geodata.length === 0) {
      return res.status(400).json({ error: "Endereço inválido" });
    }

    const latitude = parseFloat(geodata[0].lat);
    const longitude = parseFloat(geodata[0].lon);

    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ error: "Coordenadas inválidas" });
    }

    const company = repo.create({
      name,
      cnpj,
      description,
      phone,
      address,
      city,
      state,
      latitude,
      longitude,
      user
    });

    await repo.save(company);

    return res.status(201).json(company);

  } catch (error) {
    console.error("Erro createCompany:", error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const getCompany = async (req: Request, res: Response) => {
  try {
    const companies = await repo.find({
      relations: ["user"]
    });

    return res.json(companies);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const getCompanyById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const company = await repo.findOne({
      where: { id },
      relations: ["user"]
    });

    if (!company) {
      return res.status(404).json({ error: "Empresa não encontrada" });
    }

    return res.json(company);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const updateCompany = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Não autenticado" });
    }

    const company = await repo.findOne({
      where: { id },
      relations: ["user"]
    });

    if (!company) {
      return res.status(404).json({ error: "Empresa não encontrada" });
    }

    if (company.user.id !== userId) {
      return res.status(403).json({ error: "Sem permissão" });
    }

    const { name, description, phone } = req.body;

    if (name) company.name = name;
    if (description) company.description = description;
    if (phone) company.phone = phone;

    await repo.save(company);

    return res.json(company);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const deleteCompany = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Não autenticado" });
    }

    const company = await repo.findOne({
      where: { id },
      relations: ["user"]
    });

    if (!company) {
      return res.status(404).json({ error: "Empresa não encontrada" });
    }

    if (company.user.id !== userId) {
      return res.status(403).json({ error: "Sem permissão" });
    }

    await repo.remove(company);

    return res.json({ message: "Empresa deletada com sucesso" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};