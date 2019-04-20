var express = require("express");

var app = express();

//下面这句就可以直接运行public文件中的静态页面
app.use(express.static("./public"));

app.get("/",function(req,res){
	res.send("nihao");
});

app.get("/haha",function (req,res) {
	res.send("这是haha");
});

// app.get(/\/student/\/([\d]{10})/
app.get("/teacher/:id",function(req,res){
	
	res.send("老师信息，工号"+req.params.id);
});

app.listen(3000);