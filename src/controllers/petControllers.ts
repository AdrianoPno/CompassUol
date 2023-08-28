import { Request, Response } from "express"
import Pet from "../models/petModel"
import Tutor from "@/models/tutorModel"

export const createPet = async (req: Request, res: Response) => {
  try {
    const { name, species, carry, weight, date_of_birth } = req.body
    const tutorId = req.params.id

    const tutor = await Tutor.findById(tutorId)
    if (!tutor) {
      return res.status(404).json({ error: "Tutor not found." })
    }

    const newPet = new Pet({
      name,
      species,
      carry,
      weight,
      date_of_birth,
      tutor: tutorId,
    })
    await newPet.save()
    res.status(201).json(newPet)
  } catch (error) {
    console.error("Error creating pet:", error)
    res.status(500).json({ error: "Error creating pet." })
  }
}

export const getPets = async (req: Request, res: Response) => {
  try {
    const pets = await Pet.find()
    res.status(200).json(pets)
  } catch (error) {
    console.error("Error fetching pets:", error)
    res.status(500).json({ error: "Error fetching pets." })
  }
}

export const updatePet = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const updatedPet = await Pet.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
    if (updatedPet) {
      res.status(200).json(updatedPet)
    } else {
      res.status(404).json({ error: "Pet not found." })
    }
  } catch (error) {
    console.error("Error updating pet:", error)
    res.status(500).json({ error: "Error updating pet." })
  }
}

export const deletePet = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deletedPet = await Pet.findByIdAndDelete(id)
    if (deletedPet) {
      res.status(204).send()
    } else {
      res.status(404).json({ error: "Pet not found." })
    }
  } catch (error) {
    console.error("Error deleting pet:", error)
    res.status(500).json({ error: "Error deleting pet." })
  }
}
