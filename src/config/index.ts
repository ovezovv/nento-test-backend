import express, { Application } from 'express';
import cors from 'cors';
import { router } from 'routes';
import logger from 'utils/logger';


export const Init = () => {
  const app: Application = express();

  app.use(
    cors({origin:["http://127.0.0.1:3000", "http://127.0.0.1:4000"]}),
    express.json(),
    express.urlencoded({ extended: true }),
    router
  );
  app.listen(8000, () => logger.log("info", `Server running at http://localhost:8000`));

  return app;
};