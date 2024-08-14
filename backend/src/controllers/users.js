const { Users } = require('./../../models/index');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { check, validationResult } = require('express-validator');

class UserController {
    static async addUsers(req, res, next) {
        try {
            const validApiKey = process.env.API_KEY;
            if (req.headers.apikey !== validApiKey) {
                return res.status(401).json({ status: false, error: "Unauthorized access" });
            }

            // Validate request body
            await check('name', 'Name is required').notEmpty().run(req);
            await check('phone_no', 'Phone number is required').isMobilePhone().run(req);
            await check('email', 'Valid email is required').isEmail().run(req);
            await check('password', 'Password is required').isLength({ min: 6 }).run(req);

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ status: false, errors: errors.array() });
            }

            const { name, phone_no, email, password } = req.body;

            // Check if the phone number or email already exists
            const existingUser = await Users.findOne({
                where: {
                    [Op.or]: [{ phone_no }, { email }]
                }
            });

            if (existingUser) {
                return res.status(409).json({ status: false, error: "User with this phone number or email already exists" });
            }

            // Hash the password using bcrypt with a salt round of 10
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create the user
            const newUser = await Users.create({
                name,
                phone_no,
                email,
                password: hashedPassword,
                is_active: 1, // Assuming new users are active by default
            });

            return res.status(201).json({ status: true, message: "User added successfully", user: newUser });
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: false, error: "Something Went Wrong" });
        }
    }

    static async updateProfile(req, res, next) {
        try { 

        }catch (err) {
            
        }
    }
}

module.exports = UserController;
