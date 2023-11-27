const mongoose = require('mongoose')
const { Schema, ObjectId } = mongoose

const ItemsSchema = new Schema({
    item_id:{
        type: ObjectId,
        unique: false
    },
    item_name: {
        type: String
    },
    qty: {
        type: Number,
        default: 0
    },
    unit_price: {
        type: Number,
        default: 0
    }, product_img: String
})

const OrderSchema = new Schema({
    user_name: String,
    user_id: {
        type: ObjectId
    },
    phone: String,
    address: String,
    total_qty: {
        type: Number,
        required: true,
        default: 0     
    },
    total_amount: {
        type: Number,
        required: true,
        default: 0.00
    },
    shipping: {
        type: String,
        default: 'For Delivery'
    }, 
    item_list : [ItemsSchema]
}, { timestamps: true })

module.exports = mongoose.model('Order', OrderSchema, 'order_db') 