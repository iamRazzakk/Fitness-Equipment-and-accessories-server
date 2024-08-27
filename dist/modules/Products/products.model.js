"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModel = void 0;
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
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
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    images: {
        type: String,
        required: [true, "Product image is required"]
    }
}, {
    timestamps: true
});
exports.ProductsModel = (0, mongoose_1.model)('Products', productsSchema);
