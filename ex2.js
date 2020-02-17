let express  = require('express'),
    app = express()

app.use(express.static('./pub'))       // แชร์ไฟล์ผ่าน  express เป็น  static content

// app.use( '/use/:id/:name', (req,res, next) => {    // ต้องไว้ข้างบน ถ้าไม่ไว้ด้านด้านบน อาจไม่ถูกเรัียกใช้งาน
//     console.log(req.method)                        //  /:id หมายถึง เป็นตัวแปร 
//     console.log(req.params.id)                        
//     console.log(req.params.name)
//     console.log('Date time : ' + Date.now() ) 
//     next()   // ทำให้หยุดการ รีเฟส
// })

app.get('/', (req,res) => {
    res.send('Hello Word ' + req.query.foo )
    
})

app.listen(8080, () => { console.log('Server is running at port 8080')})