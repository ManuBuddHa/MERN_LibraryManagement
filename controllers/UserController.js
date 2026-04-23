const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

const createUser = async (req, res) => {
    const { userId, name, email, password, phone } = req.body;
    try {
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this phone number already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ userId, name, email, password: hashedPassword, phone });
        await newUser.save();
        res.status(201).json({ msg: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

module.exports = {createUser};
