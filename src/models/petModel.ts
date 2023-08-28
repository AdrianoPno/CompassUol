import mongoose, { Document, Schema } from "mongoose"

export interface Pet extends Document {
  name: string
  species: string
  carry: string
  weight: number
  date_of_birth: string
  tutor: Schema.Types.ObjectId
}

const petSchema = new mongoose.Schema<Pet>({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  species: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  carry: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 20,
  },
  weight: {
    type: Number,
    required: true,
    min: 0.1,
    max: 100,
  },
  date_of_birth: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value),
      message: "Invalid date format. Use YYYY-MM-DD format.",
    },
  },
  tutor: {
    type: Schema.Types.ObjectId,
    ref: "Tutor",
    required: true,
  },
})

export default mongoose.model<Pet>("Pet", petSchema)
