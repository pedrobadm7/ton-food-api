import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

const PORT = 3001;

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT} 🔥`);
    });

  })
  .catch(() => console.log('Erro ao conectar no mongodb'));


