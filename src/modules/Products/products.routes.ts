import { Router } from "express"
import { productsController } from "./products.controller"

const router = Router()
router.get("/products", productsController.getAllProductsService)
router.get("/:id", productsController.getSingleProductService)
router.put("/:id", productsController.updateSingleProductsService)
router.delete("/:id", productsController.deleteSingleProductsService)
router.post('/products', productsController.createNewProduct)

export const productsRouter = router