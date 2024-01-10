const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());




mongoose.connect("mongodb+srv://admin:eqRGbIulbVrJ4tj6@cluster0.cqtwtya.mongodb.net/auth?retryWrites=true&w=majority")
    .then(() => app.listen(5000))
    .then(() => console.log('Database Connected! Listening to localhost 5000'))
    .catch(err => console.log(err))




// eqRGbIulbVrJ4tj6