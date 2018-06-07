var mongoose = require('../config/database');
var danmakuSchema = new mongoose.Schema({
    author: String,
    referer: String
});
var danmaku = mongoose.model('dan', danmakuSchema);

module.exports = danmaku;
