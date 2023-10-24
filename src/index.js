const express = require('express');
const app = express()
const path = require('path');
const hbs = require('hbs')

const templatePath = path.join(__dirname,'../templates')

app.use(express.json());
app.set('view engine','hbs');
app.set('views',templatePath);
app.use(express.static('public'));

app.listen(5000,()=>{
    console.log('Port connected on 5000');
})

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about-us',(req,res)=>{
    res.render('about-us');
})