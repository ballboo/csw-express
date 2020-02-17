let express = require('express'),
    app  = express(),
    bodyParser = require('body-parser'),
    session = require('express-session')


app.use(session({
    secret: 'keyboard xxx' ,
    cookie: {maxAge: 60000} , 
    resave : false,
    resaveUninitialized: false 
}))