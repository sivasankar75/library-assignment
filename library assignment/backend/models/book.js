const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
   bookSchema: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String
    },
    pages:{
        type: Number
    },
    genre:{
        type: String
    },
    published:{
        type: Date,
        default: Date.now()
    }
});


const bookinfo = mongoose.model('book',bookSchema);
module.exports = bookinfo;