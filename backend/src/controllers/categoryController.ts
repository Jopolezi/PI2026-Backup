import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Category } from "../models/Category";

const categoryRepo = AppDataSource.getRepository(Category);

export const createCategory = async (req: Request, res: Response) => {
  try {

    const { name, icon } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Nome é obrigatório" });
    }

    const alreadyExists = await categoryRepo.findOne({ where: { name } });

    if (alreadyExists) {
      return res.status(400).json({ error: "Categoria já existe" });
    }

    const category = categoryRepo.create({ name, icon });
    await categoryRepo.save(category);

    return res.status(201).json(category);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {

    const categories = await categoryRepo.find();
    return res.json(categories);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {

    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const category = await categoryRepo.findOne({
      where: { id },
      relations: ["establishments"]
    });

    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    return res.json(category);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {

    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const category = await categoryRepo.findOne({ where: { id } });

    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    const { name, icon } = req.body;

    if (name) category.name = name;
    if (icon) category.icon = icon;

    await categoryRepo.save(category);

    return res.json(category);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {

    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const category = await categoryRepo.findOne({ where: { id } });

    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    await categoryRepo.remove(category);

    return res.json({ message: "Categoria deletada" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};