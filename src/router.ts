import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategories } from './app/useCases/categories/createCategory';

export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategories);

router.get('/products', (req, res) => {
  res.send('OK');
});

router.post('/products', (req, res) => {
  res.send('OK');
});

router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

router.get('/orders', (req, res) => {
  res.send('OK');
});

router.patch('/orders/:ordersId', (req, res) => {
  res.send('OK');
});

router.delete('/orders/:ordersId', (req, res) => {
  res.send('OK');
});
