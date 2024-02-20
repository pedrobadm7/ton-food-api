import { Request, Response } from 'express';
import { Category } from '../../Category';

export async function createCategories(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required'
      });
    }

    const category = await Category.create({
      icon: icon,
      name: name
    });

    res.status(201).json(category);
  } catch {
    res.status(500);
  }
}
