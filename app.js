const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


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