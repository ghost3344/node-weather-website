const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    msg1.textContent = "Loading"
    const location = '/weather?address='+search.value 
    
    fetch(location).then((response)=>{
        response.json().then((data)=>{
        if(data.error)
        {
            msg1.textContent = data.error
        }
        else{
            msg1.textContent = data.Address
            msg2.textContent = data.forecastdata
        }
        
        })
    })
})