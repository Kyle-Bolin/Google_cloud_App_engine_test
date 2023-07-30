
const{readFile,readFileSync} = require("fs");
const express = require("express");
const app = express();

app.get('/',(request, response) => {
    readFile('./home.html','utf8',(err, html)=> {
        if (err){
            response.status(500).send('sorry')
        }
        response.send(html);
    })

});

app.listen(process.env.PORT || 443,()=> console.log('http://localhost:443'))