import express from 'express';
import configureMiddlewares from './shared/middlewares/middlewares';
import tutorRouter from './shared/middlewares/tutorRoutes';
import petRouter from './shared/middlewares/petRoutes';

const app = express();

// Configuração dos middlewares
configureMiddlewares(app);

// Rotas
app.use('/api', tutorRouter); // Altere a rota base para '/api'
app.use('/api', petRouter); // Altere a rota base para '/api'

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
