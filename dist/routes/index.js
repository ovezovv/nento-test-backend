"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_1 = require("./auth");
exports.router = (0, express_1.Router)();
exports.router.use("/", (req, res) => {
    res.status(200).json({
        data: "Welcome to Nento Instagram Scraper!"
    });
});
exports.router.use('/auth', auth_1.authRouter);
