var axios = require('axios');

// API URL
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4c09178cf758593908c6d76288919ae2';


module.exports = {
  getTemp:function(formData){
    var encodeLocation = encodeURIComponent(formData.location);
    var unit = formData.unit
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&units=${unit}&q=${encodeLocation}`;

    // return Promise from the ajax call
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message) {
        //throw new Error(res.data.message);
        return res.data.cod;
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
