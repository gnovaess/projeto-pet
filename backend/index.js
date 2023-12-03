const express = require('express')
const cors = require('cors')

const app = express()
const conn = require('./db/conn');

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:4000' }))

// Public folder for images
app.use(express.static('public'))

//Routes
const UserRoutes = require('./routes/UserRoutes')

app.use('/users', UserRoutes)

app.listen(4000, () => {
    console.log("Rodando na porta 4000");
});