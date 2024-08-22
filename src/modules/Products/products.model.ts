import { model, Schema } from "mongoose";
import { IProducts } from "./products.interface";

const productsSchema = new Schema<IProducts>({
    name: {
        type: String,
        required: [true, "Products name is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Products price is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Products Description is required"]
    },
    stock: {
        type: Number,
        required: [true, "Products aviblability is required"]
    },
    images: {
        type: String,
        required: [true, "Product image is required"]
    }
},
    {
        timestamps: true
    });

export const ProductsModel = model<IProducts>('Products', productsSchema);