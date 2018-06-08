let express = require('express')

require('./config/database')

let app = express()

app.get('/', require('./routes/get'))
app.get('/put/:data', require('./routes/post'))

app.listen(1207)
