import { Request, Router, Response } from "express";
import { authRouter } from "./auth";

export const router: Router = Router();

router.use("/", (req: Request, res: Response) => {
  res.status(200).json({
    data: "Welcome to Nento Instagram Scraper!"
  })
})
router.use('/auth', authRouter);
