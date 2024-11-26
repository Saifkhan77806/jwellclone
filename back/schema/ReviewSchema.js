const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    rates:{
        type: Number
    },
    message:{
        type: String
    },
    approve:{
        type: Boolean,
        default: false
    }
})

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review