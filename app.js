const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Middleware
app.use(bodyParser())
app.use(cors())

//import routes
const route = require('./routes')

app.use('/santri', route)

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connection Error!'))
db.once('open', () => {
    console.log('Database is Connected')
})

// listen
app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.PORT}`)
})