import { Schema, model } from 'mongoose'

// product schema
const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: [true, 'Product name is required']
        },
        price: {
            type: Number,
            required: [true, 'price is required']
        },
        brand: {
            type: String,
            required: [true, 'Product brand required']
        }
    },
    {
        strict: true,
        timestamps: true,
        versionKey: false
    }
)

// create model
export const productModel = model('product', productSchema)