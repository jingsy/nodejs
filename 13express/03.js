var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("haha",{
		"news":["你好","hai","haha"]
	});
});


app.listen(3000);