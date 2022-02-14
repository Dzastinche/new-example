const request=require('request')
const express = require('express')
const app = express()
const port = 5000
const proxy='https://shrouded-temple-39982.herokuapp.com/'
app.get('/', (req, res) => {
  request(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c8ca03f400434aa49ac99176e8f8eb03`,function(error,response,body){
    if (!error&&response.statusCode==200){
        res.send(body)
    }
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  })