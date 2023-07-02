const express= require('express');
const bodyparser= require ('body-parser');
const routes =require('./routes');

const app = express();

app.use(bodyparser.json());
app.use('/', routes );


app.use((err,req,res,next) => {
    res.json(err);
});

module.exports = app;