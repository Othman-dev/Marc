const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const db = require('./config/keys').mongoURI;


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: true})
		.then(() => console.log('mongoDB Connected...'))
		.catch(err => console.log(err));
mongoose.Promise = global.Promise;

app.use(express.json())
app.use('/api', require('./routes/api'));

//error handling
app.use(function(err, req, res, next){
    console.log(err);
    res.status(400).send({error: err.message});
    res.status(400).json({success: false});
});

//listen for request
app.listen(process.env.port || 4000, function(){
   console.log('now listening for request');
});
