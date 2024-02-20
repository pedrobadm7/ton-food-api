import { Request, Response } from 'express';
import { Product } from '../../Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    const product = await Product.create({
      icon: icon,
      name: name
    });

    res.status(201).json(product);
  } catch {
    res.status(500);
  }
}
