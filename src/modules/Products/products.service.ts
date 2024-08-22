import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { ProductsModel } from "./products.model";

// get all data from database
const getAllProductsFromDB = async () => {
    const productsData = await ProductsModel.find()
    if (!productsData) {
        throw new AppError(httpStatus.NOT_FOUND, "Data Not Found");
    }
    return productsData
}
export const productsServices = {
    getAllProductsFromDB
}