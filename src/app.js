const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

//this is just a test

const port = process.env.PORT || 3000;

const viewsPath = path.join(__dirname,"../templates/views");


app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(port,()=>{
    console.log("listening on port",port);
});

