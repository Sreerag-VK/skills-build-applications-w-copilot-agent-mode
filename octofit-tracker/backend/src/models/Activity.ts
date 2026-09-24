import mongoose, { Schema, type Document } from 'mongoose';

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId | string;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  date: string;
}

const activitySchema = new Schema<IActivity>(
  {
    userId: { type: Schema.Types.Mixed, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true },
);

const Activity = mongoose.model<IActivity>('Activity', activitySchema);

export default Activity;
