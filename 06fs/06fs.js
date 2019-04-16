var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	res.writeHead(200,{"contentType":"text/html;charset=UTF8"});
	//两个参数，第一个是完整路径，当前目录写./
	//第二个参数 就是回调函数 表示文件读取成功之后 做的事情
	fs.readFile("./test.txt",function(err,data){
		if(err){
			throw err;
		}else{
			res.end(data);
		}
	})
});

server.listen(3000,"127.0.0.1");