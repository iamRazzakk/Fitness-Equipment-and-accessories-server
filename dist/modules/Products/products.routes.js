"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_controller_1 = require("./products.controller");
const router = (0, express_1.Router)();
router.get("/products", products_controller_1.productsController.getAllProductsService);
router.get("/:id", products_controller_1.productsController.getSingleProductService);
router.put("/:id", products_controller_1.productsController.updateSingleProductsService);
router.delete("/:id", products_controller_1.productsController.deleteSingleProductsService);
router.post('/products', products_controller_1.productsController.createNewProduct);
exports.productsRouter = router;
