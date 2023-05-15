import { authCallbackController, authController } from "@controllers/auth";
import { Router } from "express";

export const authRouter: Router = Router();

authRouter.get('/login', authController);
authRouter.get('/', authCallbackController);