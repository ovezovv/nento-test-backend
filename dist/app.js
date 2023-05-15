"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _config_1 = require("@config");
const database_1 = __importDefault(require("@config/database"));
require("module-alias/register");
require("dotenv/config");
(0, database_1.default)();
(0, _config_1.Init)();
