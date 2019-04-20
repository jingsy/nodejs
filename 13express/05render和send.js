var express = require("express");
var app = express();

app.set("view engine","ejs");

//不使用views 设置自己的文件夹
app.set("views","a");

app.get("./",function(req,res){
	res.render("haha",{news:[]});
});

app.listen(3000);