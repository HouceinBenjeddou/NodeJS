var http = require('http');
var fs = require("fs");
// create a server object
var dt = require('./module.js');
    //http header
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('index.html', function(err, data) {
            res.write("date and time: " +dt.myDate());
            res.write(req.url);
            res.end("hi there");
        })
        
    }).listen(8080);

// html.appendFile()
    fs.appendFile("index.html", "hello content", function (err) {
        if(err) throw err;
            console.log("saved");
    })
// html.open();
//html.writeFile();