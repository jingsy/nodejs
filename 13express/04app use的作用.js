// var express = require("express");
// var fs =require("fs");
// var app = express();

// app.use(haha);

// app.listen(3000);

// function haha(req,res,next){
// 	var filepath = req.originalUrl;
// 	//根据当前的网址读取public文件夹中的文件
// 	//如果有这个文件，那么渲染这个文件，
// 	//如果没有这个文件，那么next();

// 	fs.readFile("./public" + filepath,function(err,data){
// 		if (err) {
// 			//文件不存在
// 			next();
// 			return;
// 		}
// 		res.send(data.toString());
// 	});
// }

//app.use()给了我们增加一些特定功能的便利场所
//实际上app.use()   都能从第三方得到


//静态服务
var express = require("express");
var fs =require("fs");
var app = express();

//下面👇这两个代码顺序很重要 先先静态资源服务 再写路由
app.use("./",express.static("./public"));

//新的路由
app.get("./",function(req,res){

});

//404页面
//express会自动识别err参数，如果有 就表示这个函数能捕获err
app.use(function(req,res){
	res.send("找不到哦");
});

app.listen(3000);























