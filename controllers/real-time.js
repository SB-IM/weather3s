const Weather = require('../models/weather')

module.exports = function (req, res) {

  Weather.find({}).sort({'_id':-1}).limit(1).exec(function(err,data){
    if (err) {
      //logger.error(err);
      console.log(err);
    }

    res.json(data)
  })
}
