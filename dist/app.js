"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router");
const NotFound_1 = require("./middleware/NotFound");
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const app = (0, express_1.default)();
// Parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', router_1.Routers);
app.get('/', (req, res) => {
    res.json('Fitness Equipment and accessories server is running');
});
app.use("*", NotFound_1.NotFound);
// global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
