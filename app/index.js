var express = require('express')
var server = express()

server.get("/", function(request, response) {
    response.send("Ola mundo, que lindo isso jesus. não é possivi")
})

server.listen(8080)