import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const repo = AppDataSource.getRepository(User);

export const createUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  const existi = await repo.findOneBy({ email });
  if (existi) {
    return res.status(400).json({ error: "Email já cadastrado" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = repo.create({
    email,
    password: hashedPassword,
    name
  });

  await repo.save(user);

  const { password: _, ...userWithoutPassword } = user;

  return res.status(201).json(userWithoutPassword);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await repo.find();

  const usersWithoutPassword = users.map(({ password, ...rest }) => rest);

  return res.json(usersWithoutPassword);
};

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  const user = await repo.findOneBy({ id });

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  const { password, ...userWithoutPassword } = user;

  return res.json(userWithoutPassword);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  const userIdFromToken = (req as any).user.id;

  if (userIdFromToken !== id) {
    return res.status(403).json({ error: "Sem permissão" });
  }

  const { email, password, name } = req.body;

  const user = await repo.findOneBy({ id });

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  if (email) {
    const emailExists = await repo.findOneBy({ email });

    if (emailExists && emailExists.id !== id) {
      return res.status(400).json({ error: "Email já está em uso" });
    }

    user.email = email;
  }

  if (name) user.name = name;

  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }

  await repo.save(user);

  const { password: _, ...userWithoutPassword } = user;

  return res.json(userWithoutPassword);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  // 🔥 PRIMEIRO: verifica permissão
  const userIdFromToken = (req as any).user.id;

  if (userIdFromToken !== id) {
    return res.status(403).json({ error: "Sem permissão" });
  }

  const user = await repo.findOneBy({ id });

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  await repo.remove(user);

  return res.json({ mensagem: "Usuário deletado" });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Preencha email e senha" });
  }

  const user = await repo.findOneBy({ email });

 if (!user) {
  return res.status(401).json({ error: "Email ou senha inválidos" });
}

const isValid = await bcrypt.compare(password, user.password);

if (!isValid) {
  return res.status(401).json({ error: "Email ou senha inválidos" });
}

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );


  const { password: _, ...userWithoutPassword } = user;

  return res.json({ token, user: userWithoutPassword });
};