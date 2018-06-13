const weather = require('../models/weather')

module.exports = function (req, res) {
  const data = req.params.data.split(/[A-Z]/)
  w = new weather({
    wind_direction_AD: data[1],
    wind_direction: data[2],
    wind_speed_Hz: data[3],
    wind_speed: data[4],
    wind_speed_before_1m: data[5],
    wind_speed_before_5m: data[6],
    rainfall_count: data[7],
    rainfall_count_before_1m: data[8],
    rainfall_before_1m: data[9],
    rainfall_before_1h: data[10],
    rainfall_before_1d: data[11],
    temperature: data[12],
    humidity: data[13],
    air_pressure: data[14],
    timestamp: Date.now()
  })
  //console.log("write database")
  //console.log(req.params.data)
  //console.log(w)
  w.save(function (err, d) {
    if (err) {
      //logger.error(err);
      //res.send(`{"code": 0, "msg": "Error happens, please contact system administrator."}`);
      res.json({ msg: "Error happens, please contact system administrator." })
    }
    else {
      console.log("save successed")
      res.json({ msg: "save successed" })
    }
  })
        //  res.json({ user: 'tobi' })
}
