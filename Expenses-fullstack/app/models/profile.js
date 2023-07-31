const mongoose = require('mongoose')

const Schema = mongoose.Schema 
const profileSchema = new Schema({
     userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name : {
         type : String, 
         required: true,
    },
    age : {
        type : String,
        required : true
    }, 
    occupation : {
        type: String,
        required: true
    },
    bio : {
        type: String,
        required: true
    },
    avatar : {
        type: String,
        required: true
    }
},{timestamps: true})


const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile