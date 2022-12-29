var http = require('http');
var url = require('url');
var fs = require('fs');
var rs = fs.createReadStream("./demo.txt");
var uc = require('upper-case');
    //create server  object
    http.createServer(function(req, res) {
        var q = url.parse(req.url, true);
        var filename = "." + q.pathname;
        fs.readFile(filename, function(err, data) {
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end("404 not found");
            }
            res.writeHead(200, {'Content-Type':  'text/html'});
            res.write(uc.upperCase("hello"));
            //return that no more data will be writenable
            return res.end();
        })
    }).listen(8080);

    rs.on("open", function(){
        console.log('file opened');
    })