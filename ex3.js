let express  = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser')

let urlencodedParser = bodyParser.urlencoded({ extended: false }); 


app.use(cookieParser('BNK'))
app.use(express.static('./pub'))       // แชร์ไฟล์ผ่าน  express เป็น  static content

app.get('/getCk', (req,res) => {
    console.log(req.cookies) 
    res.send('Yeah : ' + req.cookies.name + ' ' +req.cookies.card)
    
})

app.get('/setCk', (req,res) => {
    res.cookie('card', 500)
    res.cookie('name','John')
    res.send('John got cookie card a already ')
}) 

app.post('/add',urlencodedParser , (req,res) => {
    let result = parseInt(req.body.a) + parseInt(req.body.b)
    res.send(result.toString() + ' ' + req.body.userid)
})


app.get('/', (req,res) => {
    res.send('Hello Word ' + req.query.foo )
    
})

app.listen(8080, () => { console.log('Server is running at port 8080')})