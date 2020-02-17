let express = require('express'),
    app  = express(),
    bodyParser = require('body-parser'),
    session = require('express-session')


app.use(session({
    secret: 'keyboard xxx' ,
    cookie: {maxAge: 60000} , 
    resave : false,
    saveUninitialized: false 
}))

app.get('/', (req,res) => {
    let sess  = req.session
    sess.views = (sess.views)?  ++sess.views :1
    // if (sess.views)
    //     sess.views++
    // else 
    //     sess.views = 1
    res.send('This page is load ' + req.session.views + ' times' ) 
})
app.listen(8080, () => console.log('Server is running at port 8080'))