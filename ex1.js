let express  = require('express'),
    app = express()


app.get('/', (req,res) => {
    res.send('Hello Word')
    
})

app.listen(8080, () => { console.log('Server is running at port 8080')})