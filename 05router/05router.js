// 当用户访问/student/12345678910 的查询此学号的学生id
// 当用户访问/teacher/123456 的查询此工号的老师id
// 其他提示错误

var http = require("http");
var server = http.createServer(function(req,res){

	//得到url
	var userurl = req.url;

	//正则表达式来判断此时的地址
	// var reg = //;
	res.writeHead(200,{"contentType":"text/html;charset=UTF8"});

	//substr函数来判断此时的开头
	if (userurl.substr(0,9)=="/student/") {
		var studentid =   userurl.substr(9);
		if(/^\d{10}$/.test(studentid)){
			res.end("studentid is: "+studentid);
		}else {
			res.end("number of length is not correct")
		}
	}else if (userurl.substr(0,9)=="/teacher/"){
		var teacherid =   userurl.substr(9);
		if(/^\d{6}$/.test(teacherid)){
			res.end("teacherid is: "+teacherid);
		}else {
			res.end("number of length is not correct")
		}
	}else{
		res.end("please check url")
	}


});

server.listen(3000,"127.0.0.1");