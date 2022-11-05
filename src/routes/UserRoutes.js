import express from "express";

const router = express.Router();

import UserController from "../controllers/UserController.js";

import verifyToken from "../middlewares/authValidatorMiddleware.js";

router.post("/sign-up", UserController.register);
router.post("/sign-in", UserController.login);
router.get("/verify-user", UserController.verifyUser);
router.get("/:id", UserController.getUserById);

export default router;