var express = require('express');

require('./config/database');

var app = express();
app.get('/', require('./routes/get'));
app.post('/', require('./routes/post'));

app.listen(1207);
