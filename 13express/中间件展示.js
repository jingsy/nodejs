var express = require("express");

var app = express();

//use是一种特殊的中间件 三种参数 original Url,baseUrl,path
//use与get，post不同的是，他的网址不是精确匹配的，而是有能够小文件夹拓展的


//如果这里不写next的话 下面的程序就不会执行
//"./" 可以不写，当你不写的时候 就相当于 "./",就是所有网址
app.use("./",function(req,res,next){
	res.write(new Date() + "");
	next();
})

//localhost:3000/admin/ass
app.use("./admin",function(req,res){
	res.write(req.originalUrl+"\n"); // /admin/ass
	res.write(req.bathUrl+"\n");// /admin
	res.write(req.path+"\n");// /ass
});



app.listen(3000);


