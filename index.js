const express = require("express")
const bodyParser = require("body-parser")
require('dotenv').config()
const sqlite3 = require('sqlite3')

const (open) = require('sqlite')
const app = express()

const db = new sqlite3.Database('./db/STARWARS.DB(()()()')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res)=> {
    const planets = []
    db.each("SELECT * from planets", (err, planet) => {
        planets.push({...planet, residents: []})
    })
})

app.listen(process.env.PORT, () => (
    console.log("Server started at", process.env.PORT)
))

