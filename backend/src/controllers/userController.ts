import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../models/User";

import { hashPassword } from "../utils/auth/hashPassword";
import { comparePassword } from "../utils/auth/comparePassword";
import { generateToken } from "../utils/auth/generateToken";

import { removePassword } from "../utils/user/removePassword";

const repo = AppDataSource.getRepository(User);

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        error: "Preencha todos os campos"
      });
    }

    const existingUser = await repo.findOneBy({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "Email já cadastrado"
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = repo.create({
      email,
      password: hashedPassword,
      name
    });

    await repo.save(user);

    return res.status(201).json(removePassword(user));

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await repo.find();

    const usersWithoutPassword = users.map(removePassword);

    return res.json(usersWithoutPassword);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const user = await repo.findOneBy({ id });

    if (!user) {
      return res.status(404).json({
        error: "Usuário não encontrado"
      });
    }

    return res.json(removePassword(user));

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const userIdFromToken = (req as any).user.id;

    if (userIdFromToken !== id) {
      return res.status(403).json({
        error: "Sem permissão"
      });
    }

    const { email, password, name } = req.body;

    const user = await repo.findOneBy({ id });

    if (!user) {
      return res.status(404).json({
        error: "Usuário não encontrado"
      });
    }

    if (email) {
      const emailExists = await repo.findOneBy({ email });

      if (emailExists && emailExists.id !== id) {
        return res.status(400).json({
          error: "Email já está em uso"
        });
      }

      user.email = email;
    }

    if (name) {
      user.name = name;
    }

    if (password) {
      user.password = await hashPassword(password);
    }

    await repo.save(user);

    return res.json(removePassword(user));

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const userIdFromToken = (req as any).user.id;

    if (userIdFromToken !== id) {
      return res.status(403).json({
        error: "Sem permissão"
      });
    }

    const user = await repo.findOneBy({ id });

    if (!user) {
      return res.status(404).json({
        error: "Usuário não encontrado"
      });
    }

    await repo.remove(user);

    return res.json({
      message: "Usuário deletado"
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Preencha email e senha"
      });
    }

    const user = await repo.findOneBy({ email });

    if (!user) {
      return res.status(401).json({
        error: "Email ou senha inválidos"
      });
    }

    const isValid = await comparePassword(password, user.password);

    if (!isValid) {
      return res.status(401).json({
        error: "Email ou senha inválidos"
      });
    }

    const token = generateToken({
      id: user.id
    });

    return res.json({
      token,
      user: removePassword(user)
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro no servidor"
    });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const user = await repo.findOneBy({ id: userId });

    if (!user) {
      return res.status(404).json({
        error: "Usuário não encontrado",
      });
    }

    return res.json(removePassword(user));
  } catch (error) {
    return res.status(500).json({
      error: "Erro no servidor",
    });
  }
};