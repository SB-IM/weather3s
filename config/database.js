var mongoose = require('mongoose');
var mongodbUrl;
if (process.env.MONGO_PORT_ADDR && process.env.MONGO_PORT_PORT && process.env.MONGO_INSTANCE_NAME) {
    mongodbUrl = 'mongodb://' + process.env.MONGO_PORT_ADDR + ':' + process.env.MONGO_PORT_PORT + '/' + process.env.MONGO_INSTANCE_NAME;
}
else {
    mongodbUrl = 'mongodb://127.0.0.1:27017/weather';
}

mongoose.connect(mongodbUrl)

module.exports = mongoose
