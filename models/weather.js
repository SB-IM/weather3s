const mongoose = require('../config/database')
const weatherSchema = new mongoose.Schema({
  wind_direction_AD: String,
  wind_direction: String,
  wind_speed_Hz: String,
  wind_speed: String,
  wind_speed_before_1m: String,
  wind_speed_before_5m: String,
  rainfall_count: String,
  rainfall_count_before_1m: String,
  rainfall_before_1m: String,
  rainfall_before_1h: String,
  rainfall_before_1d: String,
  temperature: String,
  humidity: String,
  air_pressure: String,
  timestamp: String
})

module.exports = mongoose.model('weather', weatherSchema)

