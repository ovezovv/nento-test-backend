import { Request, Response } from 'express'

export const mediaController = async (req: Request, res: Response) => {
  try {

    res.status(200).json({
      result: "User data successfully fetched!"
    })

  } catch (error) {
    
  }
}