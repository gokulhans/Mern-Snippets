const mongoose = require('mongoose')

const CodeBookSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    node : {
        type : String,
        required : true
    },
    react : {
        type : String,
        required : true
    },
    mongoose : {
        type : String,
        required : true
    },
    design : {
        type : String,
        required : true
    }
})

const CodeBook = mongoose.model('CodeBook',CodeBookSchema)

module.exports = CodeBook