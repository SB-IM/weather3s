const express = require('express')

require('./config/database')

let app = express()

//app.get('/', require('./controllers/get'))
//app.use('/dashboard', express.static(path.join(__dirname, 'dist')))
app.use('/', express.static('dashboard'))

app.get('/get', require('./controllers/real-time'))
app.get('/put/:data', require('./controllers/post'))

app.listen(1207)
