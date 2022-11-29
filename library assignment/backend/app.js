const express = require('express');
const cors = require('cores');
const logger = require('morgan');

require('/middleware/mongoDB');

const config = require('/config')
const PORT = process.env.PORT || config.server.port;

const app = new express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger('dev'));




const api = require('./routes/apiuser');
app.use('/apiuser',apiuser);
const apibook = require('./routes/apibook');
app.use('/apibook',apibook);

  

app.listen(PORT,()=>{
    console.log(`server connecting to ${PORT}`);
})