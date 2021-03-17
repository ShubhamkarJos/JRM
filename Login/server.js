const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')
mongoose.connect('mongodb://locolhost:27017/login-app-db', {
	useNewUrlParser:true, 
	useUnifiedTopology: true,	
	useCreateIndex: true
}).then(() => console.log('MongoDB Connected...')).catch((err) => console.log(err))



const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.post('/api/register', async (req, res) => {
	console.log(req.body())
	res.json({status: 'ok'})
})

app.listen(9999, () => {
	console.log('Server up at 9999')
})