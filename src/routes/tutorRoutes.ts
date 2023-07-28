import { Router, Request, Response } from 'express';

const tutorRouter = Router();

export interface Pet {
    id: string;
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;
}

export interface Tutor {
    id: string;
    name: string;
    phone: string;
    email: string;
    date_of_birth: string;
    zip_code: string;
    pets: Pet[];
}

const tutors: Tutor[] = [];

// Rota para recuperar todos os tutores
tutorRouter.get('/tutors', (req: Request, res: Response) => {
    return res.json(tutors);
});

// Rota para criar um novo tutor
tutorRouter.post('/tutor', (req: Request, res: Response) => {
    const newTutor: Tutor = {
        id: String(tutors.length + 1),
        ...req.body,
    };
    tutors.push(newTutor);
    return res.status(201).json(newTutor);
});


// Rota para atualizar um tutor
tutorRouter.put('/tutor/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    console.log('ID recebido na requisição:', id);

    const tutorToUpdate = tutors.find((tutor) => tutor.id === id);

    if (!tutorToUpdate) {
        console.log('Tutor não encontrado no array tutors.');
        return res.status(404).json({ error: 'Tutor não encontrado' });
    }

    console.log('Tutor encontrado:', tutorToUpdate);

    // Atualiza os dados do tutor com base nos dados enviados no corpo da requisição (req.body)
    Object.assign(tutorToUpdate, req.body);

    console.log('Tutor atualizado:', tutorToUpdate);

    return res.json(tutorToUpdate);
});


// Rota para excluir um tutor
tutorRouter.delete('/tutor/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const index = tutors.findIndex((tutor) => tutor.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Tutor não encontrado' });
    }

    const deletedTutor = tutors.splice(index, 1);
    return res.json(deletedTutor[0]);
});


export default tutorRouter;
export { tutors };