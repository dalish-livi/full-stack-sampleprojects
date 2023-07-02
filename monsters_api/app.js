const express= require('express');
const bodyparser= require ('body-parser');
const routes =require('./routes');
const http = require('http');
const path = require('path');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(bodyparser.json());
app.use('/', routes );

app.use((err,req,res,next) => {
    res.json(err);
});

module.exports = app;