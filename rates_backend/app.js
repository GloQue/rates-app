import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import Bank from './models/bankModel.js'
import Fuel from './models/fuelModel.js'
dotenv.config()
const PORT = process.env.PORT 

const app = express()
const URL = process.env.MONGO_URL
const dbName = 'rates'

//MIDDLEWARE
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
// app.use(router)

mongoose.connect(`${URL}/${dbName}`);
const db = mongoose.connection;

// Create a new bank info and insert into database

app.post('/api/bankinfo', async (req, res) => {
    const {name, buying, selling, midrate, category, link} = req.body
    const bankInfo = new Bank({
        name,
        buying,
        selling,
        midrate,
        category,
        link
    });

    try {
        const result = await bankInfo.save();
        res.status(200).send(result);
    } catch (error) {
        console.error('Error saving bank info:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', async(req, res) => {
    
    try {
        const bankInfo = await Bank.find()
        res.send(bankInfo)
    } catch (error) {
        console.log(error)
    }
})

app.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const bank = await Bank.findById(id)
        res.send(bank)
    } catch (error) {
            console.log(error)
    }
})

app.delete('/api/bankinfo/:id', async (req, res) => {
    const {id} = req.params

    try {
        const deletedItem = await Bank.findOneAndDelete({_id: id})
        if(deletedItem) res.json({message: 'Item Deleted Succesfully'})
    } catch (error) {
        console.log(error)
    }
    
})

app.put('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const {name, buying, selling, midrate, category, link} = req.body

        const updatedItem = await Bank.findByIdAndUpdate({_id: id}, {name: name, buying: buying, selling: selling, midrate: midrate, category: category, link: link}, {new: true})
        if(updatedItem) res.send(updatedItem)
    } catch (error) {
        console.log(error)
    }
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})









