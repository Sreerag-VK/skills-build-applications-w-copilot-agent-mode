"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Workout_1 = __importDefault(require("../models/Workout"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    try {
        const workouts = await Workout_1.default.find();
        res.json(workouts);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching workouts', error });
    }
});
router.post('/', async (req, res) => {
    try {
        const newWorkout = await Workout_1.default.create(req.body);
        res.status(201).json(newWorkout);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating workout', error });
    }
});
exports.default = router;
