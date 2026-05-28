import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";

import { Establishment } from "../models/Establishment";
import { Company } from "../models/Company";

import { geocodeAddress } from '../services/geocodeService';
import { findNearbyEstablishments } from '../services/establishmentService';

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

    let finalLatitude = latitude;
    let finalLongitude = longitude;

    if (!finalLatitude || !finalLongitude) {
      const geo = await geocodeAddress(address, number, district, city, state, cep);
      if (geo) {
        finalLatitude = geo.latitude;
        finalLongitude = geo.longitude;
      }
    }

    const establishment = establishmentRepo.create({
      name,
      address,
      number,
      district,
      state,
      city,
      cep,
      latitude: finalLatitude,
      longitude: finalLongitude,
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

export const findNearby = async (req: Request, res: Response) => {
  try {

    const { lat, lng, radius = '5' } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({
        error: "Latitude e longitude são obrigatórios"
      });
    }

    const establishments = await findNearbyEstablishments({
      lat: Number(lat),
      lng: Number(lng),
      radius: Number(radius),
    });

    return res.json(establishments);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });

  }
};