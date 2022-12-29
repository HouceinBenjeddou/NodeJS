var formidable = require("formidable");
var fs = require("fs");
//create an upload form 
var http = require("http");

//create an server object
    http.createServer(function(req, res) {
        if(req.url == 'fileupload'){
            var form = new formidable.IncomingForm();
            form.parse(req, function(err, fields, files) {
                var oldPath = files.filetoupload.filepath;
                var newPath = 'D:/NodeJS' + files.filetoupload.originalFilename;
                fs.rename(oldPath, newPath, function(err){
                    res.write("file uploaded and moved");
                    res.end();
                })
                res.write('File upload');
                res.end();
            })
        }
        else{
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
        }
    }).listen(8080);