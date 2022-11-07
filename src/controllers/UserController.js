import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

import userRepository from "../repositories/userRepository.js";

class UserController {
    static async register(req, res) {
        const { name, email, password, confirmPassword } = req.body;

        const userExists = userRepository.getUserByEmail(email);

        if(userExists) {
            res.status(422).json({ message: "USER ALREADY EXIST!"});

            return;
        }

        const salt = await bcrypt.genSalt(12);

        const passwordHash = await bcrypt.hash(password, salt);

        try {

            await userRepository.createUser(name, email, passwordHash);

            return res.status(201).json({ message: "USER CREATED SUCCESSFULLY!"});
            
        } catch (error) {
            
            return res.status(500).json({ message: "ERROR WHILE ATTEMPTING TO CREATE USER!", error: error });

        }
    }

    static async login(req, res) {}

    static async verifyUser(req, res) {}

    static async getUserById(req, res) {}
};

export default UserController;