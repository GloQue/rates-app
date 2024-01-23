import { Schema, model } from "mongoose";

const bankSchema = new Schema({
    name: String,
    buying: Number,
    selling: Number,
    midrate: Number,
    category: String,
    link: String
})

const Bank = model('bank', bankSchema)
export default Bank