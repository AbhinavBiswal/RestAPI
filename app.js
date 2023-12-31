const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);

//Routes
app.get('/',(req,res) => {
    res.send("Hello There!");
});



//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlparser:true},
);
    
//listening
app.listen(4200);