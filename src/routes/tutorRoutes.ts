import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';   

import { Router, request, response } from 'express';


const router = Router();    


const app: Express = express();
app.use(bodyParser.json());

interface Tutor {
    id: string;
    name: string;
    phone: string;
    email: string;
    date_of_birth: string;
    zip_code: string;
  }

let tutors: Tutor[] = [];

// Rota para recuperar todos os tutores
router.get('/tutors', (req: Request, res: Response) => {
    return res.json(tutors);
  });

// Rota para criar um novo tutor
router.post('/tutor', (req: Request, res: Response) => {
    const newTutor: Tutor = {
      id: String(tutors.length + 1),
      ...req.body,
    };
    tutors.push(newTutor);
    return res.status(201).json(newTutor);
  });


    // Rota para atualizar um tutor
router.put('/tutor/:id', (req: Request, res: Response) => {
    const { id } = req.params;
  
    console.log('ID recebido na requisição:', id);
  
    const tutorToUpdate = tutors.find((tutor) => tutor.id === id);
    
    if (!tutorToUpdate) {
      console.log('Tutor não encontrado no array tutors.');
      return res.status(404).json({ error: 'Tutor não encontrado' });
    }
  
    console.log('Tutor encontrado:', tutorToUpdate);
  
    // Atualize os dados do tutor com base nos dados enviados no corpo da requisição (req.body)
    Object.assign(tutorToUpdate, req.body);
  
    console.log('Tutor atualizado:', tutorToUpdate);
  
    return res.json(tutorToUpdate);
  });
      
      
  
  // Rota para excluir um tutor
  
    // Código para exclusão do tutor
    router.delete('/tutor/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const index = tutors.findIndex((tutor) => tutor.id === id);
        
        if (index === -1) {
          return res.status(404).json({ error: 'Tutor não encontrado' });
        }
      
        const deletedTutor = tutors.splice(index, 1);
        return res.json(deletedTutor[0]);
      });
      


export default router;