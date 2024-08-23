import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { productsServices } from "./products.service"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"

const getAllProductsService = catchAsync(async (req: Request, res: Response) => {
    const productData = await productsServices.getAllProductsFromDB();
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Products retrieved successfully",
        data: productData,
    })
})
const getSingleProductService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await productsServices.getSingleProductsFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Service retrieved successfully",
        data: product,
    })

})
export const productsController = {
    getAllProductsService,
    getSingleProductService
}