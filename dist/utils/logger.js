"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const { timestamp, printf } = winston_1.default.format;
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
const logger = winston_1.default.createLogger({
    level: 'info',
    transports: [new winston_1.default.transports.Console()],
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.json(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat)
});
exports.default = logger;
