const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
var connectionURL = process.env.connectionURL || require('../config.js').connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
