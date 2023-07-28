import { Router, Request, Response } from 'express';
import { tutors } from './tutorRoutes'; // Importe o tipo Pet e a variável tutors do arquivo tutorRoutes

const petRouter = Router();

interface Pet {
    id: string;
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;
}

const pets: Pet[] = [];


// Rota para cadastrar um novo pet e associá-lo a um tutor
petRouter.post('/pet/:tutorId', (req: Request, res: Response) => {
    const { tutorId } = req.params;
    const tutor = tutors.find((tutor) => tutor.id === tutorId);

    if (!tutor) {
        return res.status(404).json({ error: 'Tutor não encontrado' });
    }

    const newPet: Pet = {
        id: String(pets.length + 1),
        ...req.body,
    };

    // Verifica se o tutor possui a propriedade 'pets'
    if (!tutor.pets) {
        tutor.pets = [];
    }

    tutor.pets.push(newPet);
    pets.push(newPet);

    return res.status(201).json(newPet);
});

// Rota para listar todos os pets de um tutor
petRouter.get('/tutor/:tutorId/pets', (req: Request, res: Response) => {
    const { tutorId } = req.params;
    const tutor = tutors.find((tutor) => tutor.id === tutorId);

    if (!tutor) {
        return res.status(404).json({ error: 'Tutor não encontrado' });
    }

    return res.json(tutor.pets);
});

export default petRouter;
