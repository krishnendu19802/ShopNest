const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },

    
})

const Message = mongoose.model('Message', MessageSchema)
module.exports = Message