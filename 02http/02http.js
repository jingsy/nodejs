//http模块

var http = require("http");

//创造一个服务器，回调函数表示接受到请求之后做的事情
//这个函数表示接收一次就做一次事情
var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});

	console.log("服务器接受到了请求"+req.url);
	
	res.write("<h1>我是主标题</h1>")
	//每一行都必须加req.end(),end后不能在写了
	res.end("接收完毕");
});

//监听窗口
server.listen(3000,"127.0.0.1");