
//引包，引包就是引用自己的一个特殊功能
var http = require("http");
var fs = require("fs");

//创建服务器，参数是一个回调函数，表示如果有请求进来要做什么
var server = http.createServer(function(req,res){

		if(req.url=="/green"){
			fs.readFile("./green.html",function(err,data){
			//req 表示请求， res表示响应
				res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			// res.end("哈哈，我买了个"+(1+2+3)+"s");
				res.end(data);
			});
		}else if(req.url=="/red"){
			fs.readFile("./red.html",function(err,data){
			//req 表示请求， res表示响应
				res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			// res.end("哈哈，我买了个"+(1+2+3)+"s");
				res.end(data);
			});

		}else if(req.url=="/01.jpg"){
			fs.readFile("./01.jpg",function(err,data){
			//req 表示请求， res表示响应
				res.writeHead(200,{"Content-type":"image/jpg"});
			// res.end("哈哈，我买了个"+(1+2+3)+"s");
				res.end(data);			
			});
		}else if(req.url=="/css.css"){
			fs.readFile("./css.css",function(err,data){
			//req 表示请求， res表示响应
				res.writeHead(200,{"Content-type":"text/css"});
			// res.end("哈哈，我买了个"+(1+2+3)+"s");
				res.end(data);			
			});



		}else{
			res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
			res.end("阿欧 没有这个页面");
		}
	
});

//运行服务器
server.listen(3000,"127.0.0.1");

console.log("正在port3000监听");

