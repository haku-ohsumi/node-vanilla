const http = require ("http");

http.createServer (function (req, res){
    console.log("reqの中身: ", req);
    res.setHeader ("Content-Type", "text/plain;charset=utf-8");
    res.write ("こんにちは");
    res.end();
  }).listen(4000, function(){
    console.log("Listening on localhost port 4000");
});