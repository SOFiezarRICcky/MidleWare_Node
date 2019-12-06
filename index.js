const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost/dilo")
    .then(db => console.log("db conected"))
    .catch(err => console.log(err))

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static("public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

require('./router/router')(app)

app.listen(3002, () => {
    console.log("Berhasil menjalankan server pada port 3001");

})
