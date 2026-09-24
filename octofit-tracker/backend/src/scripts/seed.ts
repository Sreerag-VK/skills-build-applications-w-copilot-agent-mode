import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import LeaderboardEntry from '../models/LeaderboardEntry';
import Workout from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    const userData = [
      { name: 'Ava Thompson', email: 'ava@example.com', role: 'captain', fitnessLevel: 'advanced' },
      { name: 'Marcus Lee', email: 'marcus@example.com', role: 'member', fitnessLevel: 'intermediate' },
      { name: 'Jordan Kim', email: 'jordan@example.com', role: 'member', fitnessLevel: 'advanced' },
      { name: 'Priya Shah', email: 'priya@example.com', role: 'coach', fitnessLevel: 'advanced' },
    ];

    const teamData = [
      { name: 'Trailblazers', sport: 'CrossFit', members: ['Ava Thompson', 'Marcus Lee', 'Jordan Kim'] },
      { name: 'Storm Chasers', sport: 'Running', members: ['Priya Shah', 'Ava Thompson'] },
    ];

    const activityData = [
      { userId: 'ava@example.com', type: 'Run', durationMinutes: 42, caloriesBurned: 520, date: '2026-09-22' },
      { userId: 'marcus@example.com', type: 'Strength', durationMinutes: 60, caloriesBurned: 640, date: '2026-09-23' },
      { userId: 'jordan@example.com', type: 'Cycling', durationMinutes: 38, caloriesBurned: 490, date: '2026-09-24' },
    ];

    const leaderboardData = [
      { rank: 1, name: 'Ava Thompson', score: 980 },
      { rank: 2, name: 'Marcus Lee', score: 940 },
      { rank: 3, name: 'Jordan Kim', score: 900 },
      { rank: 4, name: 'Priya Shah', score: 860 },
    ];

    const workoutData = [
      { name: 'HIIT Circuit', focus: 'cardio', durationMinutes: 30, difficulty: 'intermediate' },
      { name: 'Strength Builder', focus: 'power', durationMinutes: 45, difficulty: 'advanced' },
      { name: 'Mobility Reset', focus: 'recovery', durationMinutes: 20, difficulty: 'beginner' },
    ];

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await LeaderboardEntry.deleteMany({});
    await Workout.deleteMany({});

    await User.insertMany(userData);
    await Team.insertMany(teamData);
    await Activity.insertMany(activityData);
    await LeaderboardEntry.insertMany(leaderboardData);
    await Workout.insertMany(workoutData);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
