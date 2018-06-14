<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>更新时间: {{ new Date(Number(this.weather.timestamp)) }}</h2>
    <h1>风</h1>
    <h2>风向测量AD值: {{ weather.wind_direction_AD }}</h2>
    <h2>风向角度值: {{ weather.wind_direction }}</h2>
    <h2>实时风速频率 1Hz: {{ weather.wind_speed_Hz }}</h2>
    <h2>实时风速 0.1M/S : {{ weather.wind_speed }}</h2>
    <h2>前一分钟平均的风速 0.1m/s: {{ weather.wind_speed_before_1m }}</h2>
    <h2>前5分钟平均的风速 0.1m/s: {{ weather.wind_speed_before_5m }}</h2>
    <br/>
    <hr/>
    <br/>


    <h1>雨</h1>
    <h2>实时雨量斗数: {{ weather.rainfall_count }}</h2>
    <h2>前一分钟雨量斗数: {{ weather.rainfall_count_before_1m }}</h2>
    <h2>前1分钟雨量 0.1mm: {{ weather.rainfall_before_1m }}</h2>
    <h2>前一小时雨量 0.1mm: {{ weather.rainfall_before_1h }}</h2>
    <h2>前24小时雨量 0.1mm: {{ weather.rainfall_before_1d }}</h2>


    <br/>
    <hr/>
    <h2>温度（摄氏度），0.1度: {{ weather.temperature }}</h2>
    <h2>湿度 0.1 （0％= 99％）: {{ weather.humidity }}</h2>
    <h2>气压（0.1 hpa）: {{ weather.air_pressure }}</h2>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      intervalID: '',
      weather: {}
    }
  },
  created() {
    this.intervalID = window.setInterval(this.getData, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalID)
  },
  methods: {
    getData() {
      let url = location.protocol + "//" + location.host + "/get"
      //console.log(url)
      this.$http.get(url)
      .then((response) => {

        this.weather =  response.data[0]
        //console.log(response.data[0].wind_direction_AD)

      })
      .catch((error) => {
        console.log(error)
      })
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
