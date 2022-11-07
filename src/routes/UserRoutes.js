import express from "express";

const router = express.Router();

import UserController from "../controllers/UserController.js";

import loginSchema from "../schemas/loginSchema.js";
import registerSchema from "../schemas/registerSchema.js";

import verifyToken from "../middlewares/authValidatorMiddleware.js";
import validateSchema from "../middlewares/schemaValidatorMiddleware.js";


router.post(
    "/sign-up", 
    validateSchema(registerSchema), 
    UserController.register
);
router.post("/sign-in", UserController.login);
router.get("/verify-user", UserController.verifyUser);
router.get("/:id", UserController.getUserById);

export default router;