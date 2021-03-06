const request = require('request');

const options = {
    method: 'GET',
    url: 'https://dark-sky.p.rapidapi.com/,',
    qs: {lang: 'en', units: 'auto'},
    json: true,
    headers: {
      'x-rapidapi-key': '59f5c05077msh442ca40de8cd8ffp14bbbejsn8f64e79c7cb4',
      'x-rapidapi-host': 'dark-sky.p.rapidapi.com',
      useQueryString: true
    }
  };


  const weather = ({lat,lng},callback) =>{
  
    options.url = "https://dark-sky.p.rapidapi.com/"+lat+","+lng
    
    request(options, (error, {body}) =>{
      if(error)
      {
          console.log('Unable to connect to weather service',undefined)
      }
      
      else
      {
        console.log(body)
        
          temperature = body.currently.temperature
          precip = body.currently.precipProbability 
          summary = body.daily.summary
          humidity = body.currently.humidity
        forecastdata = 'It is mostly '+summary+'. It is currently '+ temperature +' Degrees out. There is a '+precip+'% chance of rain . Humidity is '+humidity+'.'
        callback(undefined,forecastdata)
      }
  })
  }

  module.exports = {weather}