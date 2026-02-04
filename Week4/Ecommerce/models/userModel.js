import { Schema, model } from 'mongoose'

// create cart schema
const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product' // name of product model
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    }
})

// user schema
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'email is required']
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        cart: {
            type: [cartSchema],
            default: []
        }
    },
    {
        strict: true,
        timestamps: true,
        versionKey: false
    }
)

// create model
export const userModel = model('user', userSchema)