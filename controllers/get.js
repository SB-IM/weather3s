const Weather = require('../models/weather');

module.exports = function (req, res) {

  Weather.find(function (err, data) {
    if (err) {
      //logger.error(err);
      console.log(err);
    }

    res.json(data)
  })
}
