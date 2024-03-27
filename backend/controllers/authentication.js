const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// require("dotenv").config();
const { Secret_key } = require("../config/db");

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.status(404).json({ error: 'Existing User try to login' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ msg: 'User registered successfully!!!' });
    } catch (error) {
        res.status(404).json({ error: 'Internal Server Error', msg: error })
    }
};

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userID: user._id }, Secret_key, { expiresIn: '1h' });
        res.status(201).json({ token, email, name: user.username });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
