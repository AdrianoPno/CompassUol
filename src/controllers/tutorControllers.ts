import { Request, Response } from "express"
import Tutor from "../models/tutorModel" // Importe o modelo Tutor que você definiu
import Pet from "../models/petModel" // Importe o modelo Pet que você deve ter definido

export const createTutor = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, date_of_birth, zip_code } = req.body
    const newTutor = new Tutor({ name, phone, email, date_of_birth, zip_code })
    await newTutor.save()
    res.status(201).json(newTutor)
  } catch (error) {
    console.error("Error creating tutor:", error)
    res.status(500).json({ error: "Error creating tutor." })
  }
}

export const getTutors = async (req: Request, res: Response) => {
  try {
    const tutors = await Tutor.find()
    res.status(200).json(tutors)
  } catch (error) {
    console.error("Error fetching tutors:", error)
    res.status(500).json({ error: "Error fetching tutors." })
  }
}

export const updateTutor = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const updatedTutor = await Tutor.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true, // Execute as validações durante a atualização
    })
    if (updatedTutor) {
      res.status(200).json(updatedTutor)
    } else {
      res.status(404).json({ error: "Tutor not found." })
    }
  } catch (error) {
    console.error("Error updating tutor:", error)
    res.status(500).json({ error: "Error updating tutor." })
  }
}

export const deleteTutor = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deletedTutor = await Tutor.findByIdAndDelete(id)
    if (deletedTutor) {
      // Também exclua os pets associados a este tutor
      await Pet.deleteMany({ tutor: id })
      res.status(204).send()
    } else {
      res.status(404).json({ error: "Tutor not found." })
    }
  } catch (error) {
    console.error("Error deleting tutor:", error)
    res.status(500).json({ error: "Error deleting tutor." })
  }
}
