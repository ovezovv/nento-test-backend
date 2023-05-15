import { authCallbackController } from "@controllers/auth";
import { Router } from "express";

export const mediaRouter: Router = Router();

mediaRouter.get('/', authCallbackController);