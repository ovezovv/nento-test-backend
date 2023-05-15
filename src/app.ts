import { Init } from "@config";
import database from "@config/database";
import 'module-alias/register';
import 'dotenv/config';

database();
Init();