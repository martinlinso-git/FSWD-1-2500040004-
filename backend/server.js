const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174']
}))

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected Successfully!')

    app.listen(process.env.PORT, () => {
      console.log('Server running on port 5000')
    })
  })
  .catch(err => {
    console.log('MongoDB Error:', err.message)
  })