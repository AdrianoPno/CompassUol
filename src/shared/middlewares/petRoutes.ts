// petRoutes.ts

import { Router, Request, Response } from 'express';
import { tutors } from './tutorRoutes';
import { validateTutorFields, validatePetFields } from './validationUtils';

const petRouter = Router();

// Interface do Pet
interface Pet {
    id: string;
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;
}

// Array de Pets
const pets: Pet[] = [];


// Rota para listar todos os pets de um tutor
petRouter.get('/tutor/:tutorId/pets', (req: Request, res: Response) => {
    const { tutorId } = req.params;
    const tutor = tutors.find((tutor) => tutor.id === tutorId);

    if (!tutor) {
        return res.status(404).json({ error: 'Tutor não encontrado' });
    }

    return res.json(tutor.pets);
});


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

    // Chamada da função de validação
    const validationError = validatePetFields(newPet);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    // Verifica se o tutor possui a propriedade 'pets'
    if (!tutor.pets) {
        tutor.pets = [];
    }

    tutor.pets.push(newPet);
    pets.push(newPet);

    return res.status(201).json(newPet);
});


// Rota para atualizar um pet associado a um tutor
petRouter.put('/pet/:petId/tutor/:tutorId', (req: Request, res: Response) => {
    const { petId, tutorId } = req.params;
    const tutor = tutors.find((tutor) => tutor.id === tutorId);

    if (!tutor) {
        return res.status(404).json({ error: 'Tutor não encontrado' });
    }

    const petToUpdate = tutor.pets.find((pet) => pet.id === petId);

    if (!petToUpdate) {
        return res.status(404).json({ error: 'Pet não encontrado' });
    }

    // Atualiza os dados do pet com base nos dados enviados no corpo da requisição (req.body)
    Object.assign(petToUpdate, req.body);

    return res.json(petToUpdate);
});


// Rota para excluir um pet associado a um tutor
petRouter.delete('/pet/:petId/tutor/:tutorId', (req: Request, res: Response) => {
    const { petId, tutorId } = req.params;
    const tutor = tutors.find((tutor) => tutor.id === tutorId);

    if (!tutor) {
        return res.status(404).json({ error: 'Tutor não encontrado' });
    }

    const petIndex = tutor.pets.findIndex((pet) => pet.id === petId);

    if (petIndex === -1) {
        return res.status(404).json({ error: 'Pet não encontrado' });
    }

    const deletedPet = tutor.pets.splice(petIndex, 1);
    return res.json(deletedPet[0]);
});

export default petRouter;
