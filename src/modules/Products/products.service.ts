import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { ProductsModel } from "./products.model";

// get all data from database
const getAllProductsFromDB = async () => {
    const productsData = await ProductsModel.find()
    // console.log(productsData)
    if (!productsData) {
        throw new AppError(httpStatus.NOT_FOUND, "Data Not Found");
    }
    return productsData
}
const getSingleProductsFromDB = async (id: string) => {
    const result = ProductsModel.findById(id)
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, "Data Not Found");
    }
    return result
}
export const productsServices = {
    getAllProductsFromDB,
    getSingleProductsFromDB
}