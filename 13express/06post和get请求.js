
/**
 * Created by Danny on 2015/9/22 14:37.
 */
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));

//req.query直接得到对象
// app.get("/",function(req,res){
//     console.log(req.query);
//     res.send();
// });
app.get("/",function(req,res){
	res.render("form"); //render会自己去views找文件
});

//post请求必须通过模版引擎引包 如body-parser
app.post("/",function(req,res){
	console.log(req.body);
})

app.listen(3000);