// import module
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect();

//port no
const port = 3000;

// add middleware - cors
app.use(cors())

// body - parser
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', route);


//testing server
app.get('/', (req, res, next) =>{
    res.send('foobar');
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`); 
});