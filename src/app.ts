import dotenv from "dotenv"
import express from "express"
import configureMiddlewares from "./shared/middlewares/middlewares"
import connectToDatabase from "./config/database"
import { router as tutorRoutes } from "./routes/tutorRoutes"
import { router as petRoutes } from "./routes/petRoutes"

const app = express()

configureMiddlewares(app)
dotenv.config()
app.use("/api", tutorRoutes)
app.use("/api", petRoutes)

//conecta ao bando
connectToDatabase()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
