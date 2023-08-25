import dotenv from "dotenv"
import mongoose from "mongoose"
import express from "express" // Correção na importação
import configureMiddlewares from "./shared/middlewares/middlewares"

dotenv.config()
const app = express()
configureMiddlewares(app)

const { MONGO_URL } = process.env

if (!MONGO_URL) {
  throw new Error("DB_URL not specified in the .env file")
}

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log("Connection error:", err)
  })

const db = mongoose.connection

export default db
