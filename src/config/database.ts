import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

export async function connectToDatabase() {
  const { MONGO_URL } = process.env

  if (!MONGO_URL) {
    throw new Error("DB_URL not specified in the .env file")
  }

  try {
    await mongoose.connect(MONGO_URL)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Connection error:", error)
  }
}

export default connectToDatabase
