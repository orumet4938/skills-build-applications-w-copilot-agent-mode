import express, { Router, Request, Response } from 'express'
import { User } from '../models/User'

const router: Router = express.Router()

// GET all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

// GET user by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json(user)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

// POST create user
router.post('/', async (req: Request, res: Response) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
})

// PUT update user
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json(user)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
})

// DELETE user
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json({ message: 'User deleted' })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

export default router