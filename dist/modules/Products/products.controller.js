"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const products_service_1 = require("./products.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
// create products
const createNewProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = req.body;
    console.log(result);
    const newProduct = yield products_service_1.productsServices.createNewProduct(result);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Products created successfully",
        data: newProduct,
    });
}));
const getAllProductsService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = yield products_service_1.productsServices.getAllProductsFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Products retrieved successfully",
        data: productData,
    });
}));
const getSingleProductService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield products_service_1.productsServices.getSingleProductsFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Service retrieved successfully",
        data: product,
    });
}));
const updateSingleProductsService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productsData = yield products_service_1.productsServices.updateSingleProductsFromDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Products updated successfully",
        data: productsData,
    });
}));
const deleteSingleProductsService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield products_service_1.productsServices.deleteSingleProductsFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Products delete successfully",
        data: result,
    });
}));
exports.productsController = {
    getAllProductsService,
    getSingleProductService,
    updateSingleProductsService,
    deleteSingleProductsService,
    createNewProduct
};
