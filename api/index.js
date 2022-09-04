require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5010

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))

mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const customerRouter = require('./routes/customers')
app.use('/customers', customerRouter)