const express = require('express')
const app = express()
const port = 5600
const path = require('path')
const fs = require('fs')
const mongoose = require('./public/mongoose')
// const mongoose2 = require('./public/mongoose2')
const userSave = require('./data/userSave')
const template = require('./public/template')
const index = require('./public/index')
const nav = require('./public/nav')
const round = require('./public/round')
const interview = require('./public/interview')
const portfolio = require('./public/portfolio')
const ar = require('./public/ar')
const timer = require('./public/timer')
const mid = require('./public/mid')
const login = require('./public/login')
const sign = require('./public/sign')

//connecting to mongodb
mongoose.dbOn()
// mongoose2.dbOn();

//setting view engine as handlebars
app.set('view engine','hbs')

// instead of body parser here we are use urlencoded() to get post reqs to backend
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname,'public')))
app.use('/images',express.static('images'))
app.get('/', async (req,res)=>{
    res.status(200)
    // console.log(__dirname)
    let data = JSON.parse(fs.readFileSync('data/userSave.json'))
    let auth = JSON.parse(fs.readFileSync(`data/${data.array[0]}.json`))
    // console.log(data.array[0])
    let d = await mongoose.find1()
    res.send(index(nav(),timer,mid(d),round,interview,ar))
})

app.post('/p',async (req,res)=>{
    console.log(req.body)
    let d = await mongoose.find1()
    res.send(index(nav(req.body.name,req.body.email),timer,mid(d),round,interview,ar))
})

app.get('/login',(req,res)=>{
    res.status(200)
    res.send(login())
})
app.post('/login', async(req,res)=>{
    res.status(200)
    let d = await mongoose.auth(req.body.name,req.body.password)
    if( d != null){
        let g = await mongoose.findd(req.body.name,req.body.password)
        res.send(login(g[0].name,g[0].email,g[0].password))
    }
    else{
        res.send(login(null,"yes"))
    }
})

app.get('/sign',(req,res)=>{
    res.status(200)
    res.send(sign())
})

app.post('/sign', async (req,res)=>{
    res.status(200)
    let data = req.body
    let c = await mongoose.push(data).then((err,result)=>{
        if (err) throw err
        res.send(sign("yes"))
    })

})

app.get('/skills',(req,res)=>{
    res.status(200)
    res.send(template("skills"))
})

app.get('/coding',(req,res)=>{
    res.status(200)
    res.send(template("coding"))
})

app.get('/aptitude',(req,res)=>{
    res.status(200)
    res.send(template("aptitude"))
})

app.get('/project',(req,res)=>{
    res.status(200)
    res.send(template("projects"))
})

app.get('/github',(req,res)=>{
    res.status(200)
    res.send(portfolio("github"))
})
app.get('/linkedin',(req,res)=>{
    res.status(200)
    res.send(portfolio("linkedin"))
})

app.get('/os',(req,res)=>{
    res.status(200)
    res.send(portfolio("os"))
})

app.get('/resume',(req,res)=>{
    res.status(200)
    res.send(portfolio("resume"))
})

app.listen(port,()=>{
    console.log("server started on port "+port)
})