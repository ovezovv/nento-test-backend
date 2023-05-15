import { Request, Response } from "express"
import axios, { AxiosError } from "axios"
import logger from "@utils/logger";
import { User } from "models/user";
const querystring = require("querystring");

export const authController = async (req: Request, res: Response) => {
  try {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_APP_ID}&redirect_uri=${process.env.INSTAGRAM_APP_REDIRECT_URL}&response_type=code&scope=user_profile,user_media`
  
    return res.redirect(authUrl);
  } catch (error) {
    const e = error as AxiosError
    logger.log("error", e.message);
    return res.status(404).json({
      message: "Something went wrong!"
    })
  }
}

export const authCallbackController = async (req: Request, res: Response) => {
  try {
    const { code } = req.query

    if(!code) return res.status(404).json({ error: "Code wasn't retrieved!" });

    const authBody = querystring.stringify({
      client_id: process.env.INSTAGRAM_APP_ID,
      client_secret: process.env.INSTAGRAM_APP_SECRET,
      grant_type: "authorization_code",
      redirect_uri: process.env.INSTAGRAM_APP_REDIRECT_URL,
      code
    })

    const response = await axios.post("https://api.instagram.com/oauth/access_token", authBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })

    if(!response.data){
      return res.status(404).json({
        error: "Matching code was not found or was already used"
      })
    }

    await User.insertMany({
      username: process.env.TEST_USER,
      userId: response.data.user_id,
      accessToken: response.data.access_token
    });

    logger.log("info", "User successfully authorized and saved into database!");
    return res.status(200).json({
      result: response.data
    })
  } catch (error: any) {
    logger.log("error", error.message);
    return res.status(404).json({
      message: "Something went wrong!"
    })
  }
}