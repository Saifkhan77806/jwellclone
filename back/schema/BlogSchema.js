const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String
    },
    thought:{
        type:String 
    },
    thumbnail:{
        type:String
    }
})


const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog