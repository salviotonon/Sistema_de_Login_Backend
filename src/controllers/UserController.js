import User from "../models/User";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

class UserController {
    static async register(req, res) {}

    static async login(req, res) {}

    static async verifyUser(req, res) {}

    static async getUserById(req, res) {}
};

export default UserController;