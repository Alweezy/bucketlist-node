const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// connect mongoose to database
const config = require('./config/database');
const bucketlist = require('./controllers/bucketlist');

mongoose.connect(config.database)


//initialize app variable
const app = express();

//port declaration
const port = 3000;


//middleware for CORS
app.use(cors());

//middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// instruct the server to look for static files in the public folder.

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Invalid page');
})

app.use('/bucketlist', bucketlist);

// listen to port 3000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
})