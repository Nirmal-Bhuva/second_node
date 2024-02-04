const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World I am nirmal bhuva , i am from surat')
})

app.get('/chicken' , (req , res) => {
    res.send("sure sir , i would love to serve a chicken")
})

app.get('/idli' , (req , res) => {
    res.send("welcome to south india and would love to serve IDLI")
})

app.get('/idli2' , (req , res) => {
    var customized_idli = [{
        
        name : 'rava idli',
        size : '10 cm diameter',
        is_sambhar : true,
        is_chutney : false,
        article : "welcome to south india and would love to serve IDLI",
        article1 : "welcome to south india and would love to serve IDLI"
        

    },
    {
        
        name : 'nirmal bhuva',
        size : '10 cm diameter',
        is_sambhar : true,
        is_chutney : false,
        article : "welcome to south india and would love to serve IDLI",
        article1 : "welcome to south india and would love to serve IDLI"
        

    }
];
    res.send(customized_idli)
    res.send(`${customized_idli} dont try to make jokes`)
})

app.listen(3000 , ()=>{
    console.log('listening on port 3000')
})