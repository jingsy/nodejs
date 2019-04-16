var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});

    //由于写了true 所以就是一个对象
	var queryObj = url.parse(req.url,true).query;
	var name = queryObj.name;
	var age = queryObj.age;
	var gender = queryObj.gender;

    res.end("request get:" +name +age+gender);
});

server.listen(3000,"127.0.0.1");


//url.prase(如果第二个参数为true)，则会turn一个对象，然后就可以.xxx进行查询