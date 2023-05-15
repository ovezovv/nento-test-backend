"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const auth_1 = require("@controllers/auth");
const express_1 = require("express");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.get('/login', auth_1.authController);
exports.authRouter.get('/', auth_1.authCallbackController);
