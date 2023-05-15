import { Router } from "express";

export const authRouter: Router = Router();

authRouter.use('/login', () => {
  console.log("login", 888);
});