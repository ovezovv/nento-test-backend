import { authCallbackController } from "@controllers/auth";
import { Router } from "express";

export const profileRouter: Router = Router();

profileRouter.get('/', authCallbackController);