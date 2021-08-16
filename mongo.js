const mongoose = require('moongose')
const { mongo } = require('./token.json')
module.exports = async() => {
   mongoose.connect(mongo, {
     keepAlive: true,
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
}
