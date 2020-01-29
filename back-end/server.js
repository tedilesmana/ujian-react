const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const uploadData = require('express-fileupload');
var path = require("path");
var session = require('express-session');

//connection mongodb
// connect mongo
mongoose.connect('mongodb://localhost/ujian')
    .then(db => console.log('db_conected'))
    .catch(err => console.log(err))

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true
    })
);

app.use(uploadData());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

let corsOptions = {
    origin: '*',
    methods: ['*'],
    allowedHeaders: ['Content-Type', 'tokenshop']
}

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, "public")));

require('./routes/router')(app)
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('Berhasil menjalankan server pada port 8000')
})