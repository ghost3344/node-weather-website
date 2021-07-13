const request = require('request');

const options2 = {
    url: '',
    json: true, 
  };

const geocode = (address , callback) =>{
  
    options2.url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiZ2hvc3QzMzQ0MzMiLCJhIjoiY2txeXF1ZTV1MWI3eTJ1bW40MzA2ZXI5OCJ9.M0b3ZbkzwSRMKuB4at2s6w'
    
    request(options2,(error, {body})=> {
  
      if(error)
      {
        callback('Unable to connect to weather service',undefined)
      }
    
      else if(body.features.length == 0)
      {
          callback('Unable to find location',undefined)
      }
      else{
        data = {lat : body.features[0].geometry.coordinates[1],
                lng : body.features[0].geometry.coordinates[0],
                place : body.features[0].place_name}
       
       callback(undefined,data)
      }
    })
  }

  module.exports = {geocode}
    
  