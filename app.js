const express = require('express')
const cors = require('cors')
const TestRoute = require('./testRouter')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', TestRoute)

module.exports = app