"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LeaderboardEntry_1 = __importDefault(require("../models/LeaderboardEntry"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    try {
        const leaderboard = await LeaderboardEntry_1.default.find().sort({ score: -1 });
        res.json(leaderboard);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard', error });
    }
});
router.post('/', async (req, res) => {
    try {
        const newEntry = await LeaderboardEntry_1.default.create(req.body);
        res.status(201).json(newEntry);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating leaderboard entry', error });
    }
});
exports.default = router;
