import express from 'express';
import mongoose from 'mongoose';

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT} 🔥`);
    });

  })
  .catch(() => console.log('Erro ao conectar no mongodb'));


