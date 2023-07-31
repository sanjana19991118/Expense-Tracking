const mongoose_delete = require('mongoose-delete')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expenseSchema = new Schema({
     name : {
        type: String,
        required: true 
     },
     amount: {
         type: Number,
         required: true
     },
     description: {
         type: String,
         required: true
     },
     categoryId: {
        type: Schema.Types.ObjectId,
        ref : 'Category',
        required: 'category id is required'
     },
     userId : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
     },
     date : {
        type : String,
        required: true
     },
     invoice : {
        type: String
     }
}, {timestamps: true})

expenseSchema.plugin(mongoose_delete, {overrideMethods: true})

const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense