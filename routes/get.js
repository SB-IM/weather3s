var weather = require('../models/weather');

module.exports = function (req, res) {
  w = new weather
  w.author = "aa"
  w.referer = "bb"
  console.log("write database")
  w.save(function (err, d) {
    if (err) {
      //logger.error(err);
      res.send(`{"code": 0, "msg": "Error happens, please contact system administrator."}`);
    }
    else {
      console.log("save successed")
      res.json({ user: '233' })
      //res.send(`{"code": 1, "data": ${JSON.stringify(d)}}`);
      //redis.client.del(`dplayer${htmlEncode(jsonStr.player)}`);
    }
  })
        //  res.json({ user: 'tobi' })
}
