import { Schema, model, Types } from 'mongoose'

interface IWorkout {
  userId: Types.ObjectId
  name: string
  duration: number
  caloriesBurned: number
  intensity: string
  date: Date
  exercises: Array<{
    name: string
    sets: number
    reps: number
    weight?: number
  }>
  notes?: string
  createdAt: Date
}

const workoutSchema = new Schema<IWorkout>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    intensity: { type: String, enum: ['low', 'medium', 'high'], required: true },
    date: { type: Date, required: true },
    exercises: [
      {
        name: String,
        sets: Number,
        reps: Number,
        weight: Number
      }
    ],
    notes: String,
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

export const Workout = model<IWorkout>('Workout', workoutSchema)