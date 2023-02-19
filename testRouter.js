const express = require('express')

const TestRoute = express.Router()

TestRoute.get('/', (req, res) => {
    res.status(200).send('<h1>Pass</h1>')
})

module.exports = TestRoute