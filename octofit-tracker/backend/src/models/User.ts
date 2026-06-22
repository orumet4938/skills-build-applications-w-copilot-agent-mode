import { Schema, model } from 'mongoose'

interface IUser {
  name: string
  email: string
  age: number
  weight: number
  height: number
  fitnessGoal: string
  createdAt: Date
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    fitnessGoal: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

export const User = model<IUser>('User', userSchema)