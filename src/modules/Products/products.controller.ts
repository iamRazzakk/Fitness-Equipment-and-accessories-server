import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { productsServices } from "./products.service"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"

const getAllProductsService = catchAsync(async (req: Request, res: Response) => {
    const serviceData = await productsServices.getAllProductsFromDB()
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Products retrieved successfully",
        data: serviceData,
    })
})
export const productsController = {
    getAllProductsService
}