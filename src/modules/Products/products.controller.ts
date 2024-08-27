import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { productsServices } from "./products.service"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"


// create products
const createNewProduct = catchAsync(async (req: Request, res: Response) => {
    const result = req.body
    console.log(result)
    const newProduct = await productsServices.createNewProduct(result)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Products created successfully",
        data: newProduct,
    });
})
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
const updateSingleProductsService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const productsData = await productsServices.updateSingleProductsFromDB(id, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Products updated successfully",
        data: productsData,
    });
})
const deleteSingleProductsService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await productsServices.deleteSingleProductsFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Products delete successfully",
        data: result,
    });
})
export const productsController = {
    getAllProductsService,
    getSingleProductService,
    updateSingleProductsService,
    deleteSingleProductsService,
    createNewProduct

}