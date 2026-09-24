import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import workoutsRouter from './routes/workouts';
import './config/database';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:8000',
      codespaceName ? `https://${codespaceName}-5173.app.github.dev` : '',
      codespaceName ? `https://${codespaceName}-8000.app.github.dev` : '',
    ].filter(Boolean),
  }),
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-tracker-backend' });
});

app.get('/api/config', (_req, res) => {
  res.json({
    baseUrl,
    codespaceName: codespaceName || null,
    port,
    apiPrefix: '/api',
  });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/', (_req, res) => {
  res.send(`OctoFit Tracker API is running at ${baseUrl}`);
});

app.listen(port, () => {
  console.log(`OctoFit Tracker backend listening on ${baseUrl}`);
});
