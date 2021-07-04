
require('express-async-errors');
const express=require('express');
const app=express();
const startDebug=require('debug')('app:startDebug')
const router=require('./src/routes/stream');
var cors = require('cors')
const error=require('./midelware/error')



const helmet=require('helmet')
const morgan=require('morgan')
require('dotenv/config')
require('./config/connectdb')();


app.use(helmet());
app.use(morgan('tiny'))
app.use(express.json())

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }))

app.use('/stream',router)
app.use(error)


 const port=process.env.PORT||4000
 app.listen(port,( )=>{ console.log(`listen on ${port}`)})

