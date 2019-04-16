
function People(name,gender,age){
	this.name=name;
	this.gender=gender;
	this.age=age;
}

People.prototype={

	sayHello:function(){
		console.log(this.name + this.gender + this.age);
	}
}

//此时 people就被视为构造函数 可以用new实例化了
module.exports=People;