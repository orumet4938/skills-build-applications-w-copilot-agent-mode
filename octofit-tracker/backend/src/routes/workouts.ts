import express, { Router, Request, Response } from 'express'
import { Workout } from '../models/Workout'

const router: Router = express.Router()

// GET all workouts
router.get('/', async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find().populate('userId')
    res.json(workouts)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

// GET workouts by user ID
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find({ userId: req.params.userId })
    res.json(workouts)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

// GET workout by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findById(req.params.id).populate('userId')
    if (!workout) return res.status(404).json({ error: 'Workout not found' })
    res.json(workout)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

// POST create workout
router.post('/', async (req: Request, res: Response) => {
  try {
    const workout = new Workout(req.body)
    await workout.save()
    res.status(201).json(workout)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
})

// PUT update workout
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!workout) return res.status(404).json({ error: 'Workout not found' })
    res.json(workout)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
})

// DELETE workout
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id)
    if (!workout) return res.status(404).json({ error: 'Workout not found' })
    res.json({ message: 'Workout deleted' })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

export default router