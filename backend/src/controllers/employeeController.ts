import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Employe } from "../models/Employe";
import { User } from "../models/User";
import { Establishment } from "../models/Establishment";
import { removePassword } from "../utils/user/removePassword";

const employeRepo = AppDataSource.getRepository(Employe);
const userRepo = AppDataSource.getRepository(User);
const establishmentRepo = AppDataSource.getRepository(Establishment);

export const createEmploye = async (req: Request, res: Response) => {
  try {

    const ownerId = (req as any).user.id;
    const { userId, establishmentId, role } = req.body;

    if (!userId || !establishmentId || !role) {
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

    const user = await userRepo.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const alreadyEmploye = await employeRepo.findOne({
      where: { user: { id: userId }, establishment: { id: establishmentId } }
    });

    if (alreadyEmploye) {
      return res.status(400).json({ error: "Usuário já é funcionário deste estabelecimento" });
    }

    const employe = employeRepo.create({ user, establishment, role });
    await employeRepo.save(employe);

    employe.user = removePassword(employe.user);

    return res.status(201).json(employe);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const getEmployesByEstablishment = async (req: Request, res: Response) => {
  try {

    const establishmentId = Number(req.params.establishmentId);

    if (isNaN(establishmentId)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const employes = await employeRepo.find({
      where: { establishment: { id: establishmentId } },
      relations: ["user", "schedules"]
    });

    const employsWithoutPassword = employes.map(e => ({
      ...e,
      user: removePassword(e.user)
    }));

    return res.json(employsWithoutPassword);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const updateEmploye = async (req: Request, res: Response) => {
  try {

    const ownerId = (req as any).user.id;
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const employe = await employeRepo.findOne({
      where: { id },
      relations: ["establishment", "establishment.company", "establishment.company.owner"]
    });

    if (!employe) {
      return res.status(404).json({ error: "Funcionário não encontrado" });
    }

    if (employe.establishment.company.owner.id !== ownerId) {
      return res.status(403).json({ error: "Sem permissão" });
    }

    const { role, isActive } = req.body;

    if (role) employe.role = role;
    if (typeof isActive === "boolean") employe.isActive = isActive;

    await employeRepo.save(employe);

    return res.json(employe);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const deleteEmploye = async (req: Request, res: Response) => {
  try {

    const ownerId = (req as any).user.id;
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const employe = await employeRepo.findOne({
      where: { id },
      relations: ["establishment", "establishment.company", "establishment.company.owner"]
    });

    if (!employe) {
      return res.status(404).json({ error: "Funcionário não encontrado" });
    }

    if (employe.establishment.company.owner.id !== ownerId) {
      return res.status(403).json({ error: "Sem permissão" });
    }

    await employeRepo.remove(employe);

    return res.json({ message: "Funcionário removido" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};