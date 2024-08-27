"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const mongoose_1 = __importDefault(require("mongoose"));
const AppError_1 = __importDefault(require("../error/AppError"));
const MongooseErrorHandler_1 = require("../error/MongooseErrorHandler");
const ZodErrorHandler_1 = require("./ZodErrorHandler");
const zod_1 = require("zod");
const CastErrorHandler_1 = require("../error/CastErrorHandler");
const DuplicateErrorHandler_1 = require("../error/DuplicateErrorHandler");
const globalErrorHandler = (err, req, res) => {
    let statusCode = 500;
    let message = err.message || "Internal server error";
    let errorMessages = [
        {
            path: "",
            message: "Something went wrong",
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, ZodErrorHandler_1.ZodErrorHandler)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (err instanceof mongoose_1.default.Error.ValidationError) {
        const simplifiedError = (0, MongooseErrorHandler_1.MongooseErrorHandler)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (err instanceof mongoose_1.default.Error.CastError) {
        const simplifiedError = (0, CastErrorHandler_1.CastErrorHandler)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (err.code === 11000) { // Duplicate key error
        const simplifiedError = (0, DuplicateErrorHandler_1.DuplicateErrorHandler)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
        errorMessages = [
            {
                path: "",
                message: err.message,
            },
        ];
    }
    else if (err instanceof Error) {
        message = err.message;
        errorMessages = [
            {
                path: "",
                message: err.message,
            },
        ];
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config_1.default.NODE_DEV === "development" ? err.stack : null,
    });
};
exports.default = globalErrorHandler;
