"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("routes");
const logger_1 = __importDefault(require("utils/logger"));
const Init = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({ origin: ["http://127.0.0.1:3000", "http://127.0.0.1:4000"] }), express_1.default.json(), express_1.default.urlencoded({ extended: true }), routes_1.router);
    app.listen(8000, () => logger_1.default.log("info", `Server running at http://localhost:8000`));
    return app;
};
exports.Init = Init;
