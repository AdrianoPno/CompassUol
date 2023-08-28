import express from "express"

import {
  createPet,
  getPets,
  updatePet,
  deletePet,
} from "../controllers/petControllers"

const router = express.Router()

router.post("/tutor/:id/pets", createPet)
router.get("/pets", getPets)
router.put("/pet/:id", updatePet)
router.delete("/pet/:id", deletePet)

export { router }
