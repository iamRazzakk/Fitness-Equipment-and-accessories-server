"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = require("express");
const products_routes_1 = require("../modules/Products/products.routes");
const router = (0, express_1.Router)();
const appRouterModel = [
    {
        path: '/',
        routerFile: products_routes_1.productsRouter
    },
    {
        path: '/products',
        routerFile: products_routes_1.productsRouter
    },
];
appRouterModel.forEach((route) => router.use(route.path, route.routerFile));
exports.Routers = router;
