const mongoose = require('mongoose')

let schema = mongoose.Schema({
  Guild: String,
  Msg: String,
  
}) 

module.exports = mongoose.model('heists', schema)
