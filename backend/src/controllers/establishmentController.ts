import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";

import { Establishment } from "../models/Establishment";
import { Company } from "../models/Company";

import { removePassword } from "../utils/user/removePassword";

const establishmentRepo = AppDataSource.getRepository(Establishment);
const companyRepo = AppDataSource.getRepository(Company);

export const createEstablishment = async (req: Request, res: Response) => {
  try {

    const userId = (req as any).user.id;

    const {
      name,
      address,
      number,
      district,
      state,
      city,
      cep,
      companyId,
      latitude,
      longitude
    } = req.body;

    if (
      !name ||
      !address ||
      !number ||
      !district ||
      !state ||
      !city ||
      !cep ||
      !companyId
    ) {
      return res.status(400).json({
        error: "Preencha todos os campos"
      });
    }

    const company = await companyRepo.findOne({
      where: { id: companyId },
      relations: ["owner"]
    });

    if (!company) {
      return res.status(404).json({
        error: "Empresa não encontrada"
      });
    }

    if (company.owner.id !== userId) {
      return res.status(403).json({
        error: "Sem permissão"
      });
    }

    const establishment = establishmentRepo.create({
      name,
      address,
      number,
      district,
      state,
      city,
      cep,
      latitude,
      longitude,
      company
    });

    await establishmentRepo.save(establishment);

    company.owner = removePassword(company.owner);

    return res.status(201).json(establishment);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });

  }
};

export const getEstablishments = async (req: Request, res: Response) => {
  try {

    const establishments = await establishmentRepo.find({
      relations: ["company", "company.owner"]
    });

    const establishmentsWithoutPassword = establishments.map((establishment) => {

      establishment.company.owner = removePassword(
        establishment.company.owner
      );

      return establishment;
    });

    return res.json(establishmentsWithoutPassword);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });

  }
};

export const getEstablishmentById = async (req: Request, res: Response) => {
  try {

    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const establishment = await establishmentRepo.findOne({
      where: { id },
      relations: ["company", "company.owner"]
    });

    if (!establishment) {
      return res.status(404).json({
        error: "Estabelecimento não encontrado"
      });
    }

    establishment.company.owner = removePassword(
      establishment.company.owner
    );

    return res.json(establishment);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });

  }
};

export const updateEstablishment = async (req: Request, res: Response) => {
  try {

    const id = Number(req.params.id);
    const userId = (req as any).user.id;

    if (isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const establishment = await establishmentRepo.findOne({
      where: { id },
      relations: ["company", "company.owner"]
    });

    if (!establishment) {
      return res.status(404).json({
        error: "Estabelecimento não encontrado"
      });
    }

    if (establishment.company.owner.id !== userId) {
      return res.status(403).json({
        error: "Sem permissão"
      });
    }

    const {
      name,
      address,
      number,
      district,
      state,
      city,
      cep,
      latitude,
      longitude,
      isOpen
    } = req.body;

    if (name) establishment.name = name;
    if (address) establishment.address = address;
    if (number) establishment.number = number;
    if (district) establishment.district = district;
    if (state) establishment.state = state;
    if (city) establishment.city = city;
    if (cep) establishment.cep = cep;

    if (latitude) establishment.latitude = latitude;
    if (longitude) establishment.longitude = longitude;

    if (typeof isOpen === "boolean") {
      establishment.isOpen = isOpen;
    }

    await establishmentRepo.save(establishment);

    establishment.company.owner = removePassword(
      establishment.company.owner
    );

    return res.json(establishment);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });

  }
};

export const deleteEstablishment = async (req: Request, res: Response) => {
  try {

    const id = Number(req.params.id);
    const userId = (req as any).user.id;

    if (isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const establishment = await establishmentRepo.findOne({
      where: { id },
      relations: ["company", "company.owner"]
    });

    if (!establishment) {
      return res.status(404).json({
        error: "Estabelecimento não encontrado"
      });
    }

    if (establishment.company.owner.id !== userId) {
      return res.status(403).json({
        error: "Sem permissão"
      });
    }

    await establishmentRepo.remove(establishment);

    return res.json({
      message: "Estabelecimento deletado"
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });

  }
};