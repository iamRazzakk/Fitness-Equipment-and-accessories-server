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
exports.productsServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const products_model_1 = require("./products.model");
// create a new product
const createNewProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, stock, images, category } = payload;
    const newProduct = yield products_model_1.ProductsModel.create({
        name, description, price, stock, images, category
    });
    if (!newProduct) {
        throw new AppError_1.default(http_status_1.default.EXPECTATION_FAILED, "Something is wrong from products service");
    }
    return newProduct;
});
// get all data from database
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = yield products_model_1.ProductsModel.find();
    // console.log(productsData)
    if (!productsData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Data Not Found");
    }
    return productsData;
});
const getSingleProductsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = products_model_1.ProductsModel.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Data Not Found");
    }
    return result;
});
const updateSingleProductsFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = yield products_model_1.ProductsModel.findByIdAndUpdate(id, payload, {
        new: true,
    });
    if (!productData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Data Not Found");
    }
    return productData;
});
const deleteSingleProductsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = yield products_model_1.ProductsModel.findByIdAndDelete(id);
    if (!productData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Data Not Found");
    }
    return productData;
});
exports.productsServices = {
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateSingleProductsFromDB,
    deleteSingleProductsFromDB,
    createNewProduct
};
