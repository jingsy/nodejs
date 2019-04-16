
var foo = require("./test/foo.js");

var People = require("./test/people.js");


var a = new People("jay", "male", 12);

console.log(a);


console.log(foo.msg);
console.log(foo.info);

foo.showInfo();



//1.可以直接require 普通文件
//2.可以直接暴露类
//3.require 不写 ./说明直接引用的 node——modules
//4.如果只写 这种 bar  说明直接引用的文件夹