let express = require('express'),
    app = express()

app.set('views', './views')
app.set('view engine ', 'ejs')

app.get('/', (req,res) => {
    res.render('fruitView', {fruit : ['banana' , 'apple' , 'mango' ]})

})
app.listen(8000)