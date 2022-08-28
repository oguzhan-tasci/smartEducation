const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
require('dotenv').config()

const app = express();

const port = 3000;

mongoose.connect(process.env.MONGO_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify : false,
    // useCreateIndex : true
}, () => {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    })
})

app.set("view engine", "ejs");

// Middleware
app.use(express.static('public'));
// req.body'den gelen degerleri görmemizi sağlar , aksi taktirde undefined olur.
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Routes

app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);