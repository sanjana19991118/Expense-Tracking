const mongoose = require('mongoose')

const Schema = mongoose.Schema
const categorySchema = new Schema({
    category : {
         type: String,  
    },
    userId : {
       type: Schema.Types.ObjectId,
       ref: 'User',
       required: true

    }
}, {timestamps: true})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category