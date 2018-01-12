const express = require('express')
const morgan = require('morgan')
const v1Routes = require('./api/v1')

const app = express()

app.use(morgan('combined'))
app.use('/api/v1/', v1Routes)

app.listen(4000, function() {  
    console.log("API running on 4000")
})