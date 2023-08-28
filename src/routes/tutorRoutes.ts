import express from "express"

import {
  createTutor,
  getTutors,
  updateTutor,
  deleteTutor,
} from "../controllers/tutorControllers"

const router = express.Router()

router.post("/tutor", createTutor)
router.get("/tutors", getTutors)
router.put("/tutor/:id", updateTutor)
router.delete("/tutor/:id", deleteTutor)

export { router }
