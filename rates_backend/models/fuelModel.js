import { Schema, model } from "mongoose";

const fuelSchema = new Schema({
    name: String,
    buying: Number,
    selling: Number,
    midrate: Number
})

const Fuel = model('fuel', fuelSchema)
export default Fuel