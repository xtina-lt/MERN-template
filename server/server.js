const PORT = 8000
const express = require('express')
const app = express()

app.listen( PORT, () => console.log(`Party on port: ${PORT}`) )

// npm i -g nodemon
// npm i express