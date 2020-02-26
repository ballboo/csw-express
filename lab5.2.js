let express = require('express'),
    app  = express(),
    bodyParser = require('body-parser'),
    session = require('express-session')

let urlencodedParser = bodyParser.urlencoded({ extended: false }); 
app.use(express.static('./index'))       // แชร์ไฟล์ผ่าน  express เป็น  static content


app.use(session({
    secret: 'keyboard xxx' ,
    cookie: {maxAge: 60000} , 
    resave : false,
    saveUninitialized: false 
}))
app.get('/', (req , res) =>{

})

app.post('/admin',urlencodedParser , (req ,res) => {
    let email = req.body.email.toString().trim()
    console.log()
    if ( email != ' ' || parseInt(req.body.password) ===  240311 ){
        res.send('Hello ' + email  )
    }
    else{
        res.send('Plese login first. ')
    }
})
app.get('/', (req,res) => {

    
})
app.listen(8080, () => console.log('Server is running at port 8080'))