//YOUR CODE GOES HERE
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./data/db.json')

app.use(cors())
app.use(express.json())


//Get request
app.get('/', (req, res) => {
    res.status(200).send(db.products)
})

//post request
app.post('/products', (req, res) => {
    res.status(200).send(req.body)
})





module.exports = app;
