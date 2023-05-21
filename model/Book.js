const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({},{strict:false});

module.exports = mongoose.model('Book',bookSchema);