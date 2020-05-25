// en applikation Hello World

// Variabler
const fs = require('fs');
const http = require('http');
const express = require('express');

// skapa en server.

const server = http.createServer(function(req, res) {

    // Logga request
    console.log(req.url);

    // Filens sökväg

    let file = __dirname + req.url;

    // ge en response
    //res.end("Hello World");

    // läs in filen index.html

    fs.readFile(file, function(error, data) {

        if (error) {
            res.statusCode = 404;
            res.end(JSON.stringify(error));
        }

        res.statusCode = 200;
        res.end(data);
    })

})


// lyssna på request
server.listen(8080);



console.log("Server Running....")