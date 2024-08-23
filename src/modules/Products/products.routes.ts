import { Router } from "express"
import { productsController } from "./products.controller"

const router = Router()
router.get("/products", productsController.getAllProductsService)
router.get("/:id", productsController.getSingleProductService)

export const productsRouter = router