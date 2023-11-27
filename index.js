require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const users = require('./Routes/users')
const products = require('./Routes/products')
const articles = require('./Routes/articles')
const cart = require('./Routes/cart')
const order = require('./Routes/ordering')

// express app
const app = express()

// middleware
app.use(express.json({ limit: '10mb' }));

// routes
app.use('/api/users', users)
app.use('/api/products', products)
app.use('/api/articles', articles)
app.use('/api/cart', cart)
app.use('/api/ordering', order)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listening
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

module.exports = app;