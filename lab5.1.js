var express = require('express'),
    app = express()

app.use(express.static(__dirname + '/image'));
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/computer', (req, res) => {
   res.render('computer', {computer: [{title :'Windows',img :'1.jpg'}, {title: 'OSX',img:'2.jpg'}, {title:'Android',img:'3.jpg'}, {title:'iOS', img:'4.jpg'}], com: 'Computer'})
})
app.listen(8080)