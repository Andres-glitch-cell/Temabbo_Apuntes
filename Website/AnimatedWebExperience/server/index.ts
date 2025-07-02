import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Aquí tus rutas y middlewares
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.listen(PORT, 'localhost', () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

