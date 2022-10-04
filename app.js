
const express = require('express')

const app = express()
const port = 3000

app.get('/',(req,res) => res.send('hello, Express !!'))

app.listen(port,() => console.log(`Notre aplication node est demarrée sur : http://localhost:${port}`))