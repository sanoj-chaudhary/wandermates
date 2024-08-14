const { Users } = require('./../../models/index');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthController {
    static async login(req, res, next) {
        try {
            await check('email', 'Valid email is required').isEmail().run(req);
            await check('password', 'Password is required').notEmpty().run(req);

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ status: false, errors: errors.array() });
            }

            const { email, password } = req.body;
            const user = await Users.findOne({ where: { email }, raw: true });
            if (!user) {
                return res.status(401).json({ status: false, error: "Invalid email or password" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ status: false, error: "Invalid email or password" });
            }

            const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

            return res.status(200).json({
                status: true,
                message: "Login successful",
                token,
                user
            });
        } catch (e) {
            console.error(e);
            res.status(500).json({ status: false, error: "Something went wrong" });
        }
    }
}

module.exports = AuthController;
