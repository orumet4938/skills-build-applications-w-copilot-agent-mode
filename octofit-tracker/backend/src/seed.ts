import mongoose from 'mongoose'
import { User } from './models/User'
import { Workout } from './models/Workout'

const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker'

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB for seeding')

    // Clear existing data
    await User.deleteMany({})
    await Workout.deleteMany({})
    console.log('🗑️ Cleared existing data')

    // Create sample users
    const users = await User.insertMany([
      {
        name: 'Alice Octopus',
        email: 'alice@octofit.com',
        age: 28,
        weight: 65,
        height: 170,
        fitnessGoal: 'Build muscle'
      },
      {
        name: 'Bob Tentacles',
        email: 'bob@octofit.com',
        age: 35,
        weight: 80,
        height: 180,
        fitnessGoal: 'Lose weight'
      },
      {
        name: 'Carol Suction',
        email: 'carol@octofit.com',
        age: 26,
        weight: 60,
        height: 165,
        fitnessGoal: 'Increase endurance'
      }
    ])
    console.log(`✅ Created ${users.length} users`)

    // Create sample workouts
    const workouts = await Workout.insertMany([
      {
        userId: users[0]._id,
        name: 'Upper Body Strength',
        duration: 60,
        caloriesBurned: 350,
        intensity: 'high',
        date: new Date('2024-06-20'),
        exercises: [
          { name: 'Bench Press', sets: 4, reps: 8, weight: 80 },
          { name: 'Pull-ups', sets: 3, reps: 10 },
          { name: 'Dumbbell Rows', sets: 3, reps: 12, weight: 30 }
        ],
        notes: 'Great session, feeling strong'
      },
      {
        userId: users[0]._id,
        name: 'Cardio Session',
        duration: 45,
        caloriesBurned: 450,
        intensity: 'medium',
        date: new Date('2024-06-21'),
        exercises: [
          { name: 'Running', sets: 1, reps: 1 },
          { name: 'Jump Rope', sets: 5, reps: 30 }
        ]
      },
      {
        userId: users[1]._id,
        name: 'Full Body Workout',
        duration: 75,
        caloriesBurned: 520,
        intensity: 'high',
        date: new Date('2024-06-20'),
        exercises: [
          { name: 'Squats', sets: 4, reps: 10, weight: 100 },
          { name: 'Deadlifts', sets: 3, reps: 6, weight: 140 },
          { name: 'Push-ups', sets: 3, reps: 20 }
        ]
      },
      {
        userId: users[2]._id,
        name: 'Yoga & Flexibility',
        duration: 50,
        caloriesBurned: 200,
        intensity: 'low',
        date: new Date('2024-06-21'),
        exercises: [
          { name: 'Vinyasa Flow', sets: 1, reps: 1 },
          { name: 'Stretching', sets: 1, reps: 1 }
        ],
        notes: 'Relaxing morning session'
      }
    ])
    console.log(`✅ Created ${workouts.length} workouts`)

    console.log('\n🎉 Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()