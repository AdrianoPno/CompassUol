import express, { Express } from 'express';
import bodyParser from 'body-parser';
import tutorRoutes from './routes/tutorRoutes';

const app: Express = express();

app.use(bodyParser.json());

// Configurar o roteador para as rotas de tutor
app.use('/api', tutorRoutes);

const PORT: number = 3000; // Escolha uma porta disponível

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
