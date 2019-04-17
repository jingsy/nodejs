
//需要使用一个日期时间，格式为20180304

//直接去npm社区搜索需求api
//如果要配置一个模块 直接cmd搜索
//npm instal




// require()别的js文件的时候，将执行那个文件

// require()中的路径 是从当前的这个js文件出发 找到别人
// 所有 桌面上有一个a.js， test 文件夹中有 b.js,c.js

// a要引用b：
// var b = require("./test/b.js");

// b要引用c：
// var b = require("./c.js");


// 但是 fs等其他的模块 用到路径的时候， 都是相对于cmd命令光标所在的位置，so，如果文件夹中，有一个1.txt,那么在b.js在想读这个文件，推荐用绝对路径：

// fs.readFile 要用 __dirname + "./xx"
