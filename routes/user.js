const express = require('express');
const User = require('../models/user');
const router = express.Router();

// GET current user
router.get('/profile', (req, res) => {
    if (!req.user) {
        res.status(403).json({ msg: "Not logged in" });
    } else {
        res.json(req.user);
    }
});

// More user-related routes can be added here

module.exports = router;
