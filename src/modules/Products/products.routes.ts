import { Router } from "express"
import { productsController } from "./products.controller"

const router = Router()
router.get("/", productsController.getAllProductsService)

export const productsRouter = router