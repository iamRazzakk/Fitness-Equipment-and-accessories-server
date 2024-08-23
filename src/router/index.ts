import { Router } from "express";
import { productsRouter } from "../modules/Products/products.routes";

const router = Router()
const appRouterModel = [
    {
        path: '/',
        routerFile: productsRouter
    },
    {
        path: '/products',
        routerFile: productsRouter
    },

]
appRouterModel.forEach((route) => router.use(route.path, route.routerFile))
export const Routers = router