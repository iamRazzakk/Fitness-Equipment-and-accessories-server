import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { ProductsModel } from "./products.model";
import { IProducts } from "./products.interface";

// create a new product
const createNewProduct = async (payload: IProducts) => {
    const { name, description, price, stock, images, category } = payload;
    const newProduct = await ProductsModel.create({
        name, description, price, stock, images, category
    })
    if (!newProduct) {
        throw new AppError(httpStatus.EXPECTATION_FAILED, "Something is wrong from products service");
    }
    return newProduct
}
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
const updateSingleProductsFromDB = async (id: string, payload: IProducts) => {
    const productData = await ProductsModel.findByIdAndUpdate(id,
        payload, {
        new: true,
    })
    if (!productData) {
        throw new AppError(httpStatus.NOT_FOUND, "Data Not Found");
    }
    return productData

}
const deleteSingleProductsFromDB = async (id: string) => {
    const productData = await ProductsModel.findByIdAndDelete(id,
    )
    if (!productData) {
        throw new AppError(httpStatus.NOT_FOUND, "Data Not Found");
    }
    return productData

}
export const productsServices = {
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateSingleProductsFromDB,
    deleteSingleProductsFromDB,
    createNewProduct
}