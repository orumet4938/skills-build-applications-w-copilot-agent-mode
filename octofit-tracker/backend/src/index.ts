import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 8000
const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker'

// Middleware
app.use(express.json())

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🐙 OctoFit Tracker backend running on port ${PORT}`)
  console.log(`MongoDB listening on port 27017`)
  console.log(`Frontend running on port 5173`)
})
