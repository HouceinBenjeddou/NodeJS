var url = require("url");
var adr = 'http://localhost:8080/default.htm?year=2022&month=february';
//return a url object with each part of the address as properties
var q = url.parse(adr, true);

    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);