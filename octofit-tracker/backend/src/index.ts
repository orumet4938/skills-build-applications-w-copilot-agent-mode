import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import workoutRoutes from './routes/workouts'
import userRoutes from './routes/users'

const app: Express = express()
const PORT = 8000
const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker'

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB')
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error)
  })

// Routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    message: '🐙 OctoFit Tracker API is running',
    version: '1.0.0'
  })
})

// Error Handling Middleware
app.use((err: any, req: Request, res: Response) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  })
})

// Start Server
app.listen(PORT, () => {
  console.log(`🐙 OctoFit Tracker backend running on port ${PORT}`)
  console.log(`📊 MongoDB listening on port 27017`)
  console.log(`🎨 Frontend running on port 5173`)
})

export default app
