const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const contactRoutes = require('./routes/contact')
  
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./models");

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.error("Cannot connect to the database!", error);
        process.exit();
    });

app.use('/api', contactRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

