const mongoose = require('mongoose');

const mkacademySchema = new mongoose.Schema({},{strict:false});

module.exports = mongoose.model('Mkacademy',mkacademySchema);