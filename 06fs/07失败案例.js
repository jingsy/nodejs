var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
res.writeHead(200,{"contentType":"text/html;charset=UTF8"});
	
	//不处理小图标
	if(req.url=="/favicon.ico"){
		return;
	}
	//创建文件夹aaa
	// fs.mkdir("./aaa");


	// //state检测状态，如果是文件夹就是true
	// fs.stat("./aaa",function(err,data){
	// 	console.log(data.isDirectory());//true
	// });

	var myFiles = [];
	fs.readdir("./aaa",function(err,files){
		//files是个数组 表示./aaa文件夹里的所有东西 包括文件和文件夹
		// console.log(files);

		 
		for (var i = 0; i < files.length; i++) {
			var thefilename = files[i];
			
			//再一次检测
			fs.stat("./aaa/" + thefilename, function(err,stats){
				//如果是文件夹，那么输出它
				if(stats.isDirectory()){
					myFiles.push(thefilename);
				}
				console.log(myFiles);
			});
		}
	});
});

server.listen(3000,"127.0.0.1");