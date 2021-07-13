const path = require('path')
const express = require('express')
const hbs=require('hbs')
const geocall = require('./utils/geocall.js')
const weathercall = require('./utils/weathercall.js')

//define paths for express config
const app = express()  // call once to generate express application
const viewpath = path.join(__dirname,'../templates/views')
const partialpath = path.join(__dirname,'../templates/partials')

//set handlebars engine and view location
app.set('view engine','hbs')  //set hbs module to set dynamic templates
app.set('views',viewpath) 
hbs.registerPartials(partialpath)

app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>
{
    res.render('index',{
        title: 'weather app',
        name: 'kashyap jivani'
    })
})



app.get('/about',(req,res)=>
{
    res.render('about',{
        title: 'about page',
        name: 'kashyap jivani'
    })
})

app.get('/help',(req,res)=>
{
    res.render('help',{
        title: 'Help page',
        name: 'kashyap jivani'
    })
})

app.get('/weather',(req,res) =>{
    if(!req.query.address){
        return res.send({error : 'Please provide address'})
    }
    geocall.geocode(req.query.address,(error,data)=>
    {
        if(error)
      {
            return res.send({error : 'Unable to find given location'})
      }
      else{
        weathercall.weather(data,(error,forecastdata)=>
        {
          if(error)
          {
            return res.send({error : 'Unable to find given location'})
          }
          else{
            res.send({
                Address: data.place,
                forecastdata
            })
          }
        })
    }

})   
})

app.get('/help/*',(req,res)=>
{
    res.render('404error',{
        err: "Unable to find help page",
        title: '404',
        name: 'kashyap jivani'

    })
    
})

app.get('*',(req,res)=>
{
    res.render('404error',{
        err: "404 Error . page not found",
        title: '404',
        name: 'kashyap jivani'
    })
})

app.listen(3000,() =>
{
console.log("server is running on port 3000")
})  // to start the server , 3000 is port for developers , callback func runs when server is running