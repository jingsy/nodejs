var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

http.createServer(function(req,res){
	

	//得到用户的路径
	var pathname = url.parse(req.url).pathname;

    if(pathname=="/"){
        pathname="index.html";
    }
    //得到拓展名
    var extname = path.extname(pathname);

	//真的读取这个文件
	fs.readFile("./static/" + pathname,function(err,data){

		if (err) {
			//如果此文件不存在，就应该404返回
			fs.readFile("./static/404.html",function(err,data){
				res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
				res.end(data);
			});
			return;
		};

		
		var mime = getMime(extname);
		//MIME类型
		//网页文件：text.html
		//jpg: 	image/jpg
		res.writeHead(200,{"content-Type":mime});

		res.end(data);
	});
}).listen(3000,"127.0.0.1");

function getMime(extname){
	switch (extname) {
        case ".js":
            return "text/javascript";
            break;
		case ".html":
			return "text/html";
			break;
		case ".jpeg":
			return "image/jpg";
			break;
        case ".jpg":
            return "image/jpg";
            break;
        case ".png":
            return "image/png";
            break;
		case ".css":
			return "text/css";
			break;
	}
}