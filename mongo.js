const mongoose = require('mongoose')
const { mongo } = require('./token.json')
module.exports = async() => {
   mongoose.connect(mongo, {
     keepAlive: true,
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
}
