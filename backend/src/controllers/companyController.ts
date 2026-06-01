import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";

import { Company } from "../models/Company";
import { User } from "../models/User";

const companyRepo = AppDataSource.getRepository(Company);
const userRepo = AppDataSource.getRepository(User);

export const createCompany = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const { fantasyName, cnpj, description, phone } = req.body;

    if (!fantasyName || !cnpj || !description || !phone) {
      return res.status(400).json({
        error: "Preencha todos os campos"
      });
    }

    const user = await userRepo.findOneBy({ id: userId });

    if (!user) {
      return res.status(404).json({
        error: "Usuário não encontrado"
      });
    }

    const cnpjExists = await companyRepo.findOneBy({ cnpj });

    if (cnpjExists) {
      return res.status(400).json({
        error: "CNPJ já cadastrado"
      });
    }

    const company = companyRepo.create({
      fantasyName,
      cnpj,
      description,
      phone,
      owner: user
    });

    await companyRepo.save(company);

    return res.status(201).json(company);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await companyRepo.find({
      relations: ["owner"]
    });

    return res.json(companies);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const getCompanyById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const company = await companyRepo.findOne({
      where: { id },
      relations: ["owner"]
    });

    if (!company) {
      return res.status(404).json({
        error: "Empresa não encontrada"
      });
    }

    return res.json(company);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const updateCompany = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const userIdFromToken = (req as any).user.id;

    const company = await companyRepo.findOne({
      where: { id },
      relations: ["owner"]
    });

    if (!company) {
      return res.status(404).json({
        error: "Empresa não encontrada"
      });
    }

    if (company.owner.id !== userIdFromToken) {
      return res.status(403).json({
        error: "Sem permissão"
      });
    }

    const { fantasyName, cnpj, description, phone } = req.body;

    if (cnpj && cnpj !== company.cnpj) {
      const cnpjExists = await companyRepo.findOneBy({ cnpj });

      if (cnpjExists) {
        return res.status(400).json({
          error: "CNPJ já cadastrado"
        });
      }

      company.cnpj = cnpj;
    }

    if (fantasyName) {
      company.fantasyName = fantasyName;
    }

    if (description) {
      company.description = description;
    }

    if (phone) {
      company.phone = phone;
    }

    await companyRepo.save(company);

    return res.json(company);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const deleteCompany = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const userIdFromToken = (req as any).user.id;

    const company = await companyRepo.findOne({
      where: { id },
      relations: ["owner"]
    });

    if (!company) {
      return res.status(404).json({
        error: "Empresa não encontrada"
      });
    }

    if (company.owner.id !== userIdFromToken) {
      return res.status(403).json({
        error: "Sem permissão"
      });
    }

    await companyRepo.remove(company);

    return res.json({
      message: "Empresa deletada"
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};