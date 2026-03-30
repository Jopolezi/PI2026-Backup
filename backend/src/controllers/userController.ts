import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../models/User";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

const repo = AppDataSource.getRepository(User);

export const createUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const user = repo.create({ email, password, name });
  await repo.save(user);

  return res.json(user);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await repo.find();
  return res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ erro: "ID inválido" });
  }

  const user = await repo.findOneBy({ id });

  if (!user) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  return res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, name } = req.body;

  const user = await repo.findOneBy({ id: Number(id) });

  if (!user) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  user.email = email;
  user.password = password;
  user.name = name;

  await repo.save(user);

  return res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await repo.findOneBy({ id: Number(id) });

  if (!user) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  await repo.remove(user);

  return res.json({ mensagem: "Usuário deletado" });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await repo.findOneBy({ email });


  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  if (user.password !== password) {
    return res.status(401).json({ error: "Senha inválida" });
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  return res.json({ token, user });
};
