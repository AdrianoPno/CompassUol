import mongoose, { Schema, Document } from "mongoose"

export interface Tutor extends Document {
  name: string
  phone: string
  email: string
  date_of_birth: string
  zip_code: string
  pets: mongoose.Types.ObjectId[]
}

const tutorSchema = new mongoose.Schema<Tutor>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => /^\d{10,11}$/.test(value), // Validação para um formato de telefone válido
      message: "Número de telefone inválido",
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: (value: string) => /\S+@\S+\.\S+/.test(value), // Validação para um formato de e-mail válido
      message: "E-mail inválido",
    },
  },
  date_of_birth: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value), // Validação para um formato de data de nascimento válido (AAAA-MM-DD)
      message: "Data de nascimento inválida. Use o formato AAAA-MM-DD",
    },
  },
  zip_code: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => /^\d{5}-\d{3}$/.test(value), // Validação para um formato de CEP válido (#####-###)
      message: "CEP inválido. Use o formato #####-###",
    },
  },
  pets: [{ type: Schema.Types.ObjectId, ref: "PetModel" }],
})

export default mongoose.model<Tutor>("Tutor", tutorSchema)
