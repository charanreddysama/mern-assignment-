
import {Schema,model} from 'mongoose'

//create product schema
const productSchema = new Schema({
    pid:{
        type:Number,
        required:[true,"product id is required"],
        unique:true,
        min:[2,"minimum length required"]
    },
    pname:{
        type:String,
        required:[true,"product name is required"],
        minLength:[2,"min length is 2"],
        maxLength:[10,"max length exceeded"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
    }
},{
    strict:"throw",

})
export const productModel = model('product',productSchema)