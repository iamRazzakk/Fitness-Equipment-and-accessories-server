"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_DEV: process.env.NODE_DEV
};
