// 创建数组
var arr = [1,true,false,undefined,{x:1},[1,2,3]];
// 创建部分成员为空的数组
var commasArr1 = [1,,"1235s"] //1,undefined,1235s

// 创建数组-new Array
var arr = new Array();
var arrWithlength = new Array(100); //undefined*100;

// 数组元素增减
var arr = [];
arr[0] = 1;
arr[1] = 2;

// 使用push向数组的结尾添加成员
arr.push(3);
arr; //[1,2,3]

// arr.length使用向数组的结尾添加成员
arr[arr.length] = 4; //eaqal to arr.push(4)
arr;//[1,2,3,4]

//使用unishift向数组添加成员
arr.unshift(0);
arr;//[0,1,2,3,4]

//删除成员（删除后的程序依然会存在与成员队列中，读取时返回undefined）
delete arr[2];
arr;//[0,1,undefined,3,4]读取时返回undefined
arr.length; //5
2 in arr;//false

// 使用arr.length进行删除成员
arr.length -= 1;
arr; //[0,1,undefined,3]

// 使用pop()删除数组的末尾成员
arr.pop(); //3 returned by pop 
arr; //[0,1,undefined]

// 把数组的第一个元素从其中删除；
arr.shift(); //0 returned by shift
arr; //[1,undefined]

--------------------------------------------------------------
// 数组迭代
var i = 0; n = 10;
var arr = [1,2,3,4,5]
for (;i < n;i++) {
	console.log(arr[i]);//1,2,3,4,5
}

//注意：使用in可能会导致数组遍历时读取prototype上面的值，并且排序可能不统一；
//for...in适用于对象
for(i in arr) {
	console.log(arr[i]);//1,2,3,4,5
}

//声明一个数组的原型链x赋值为inherited的字符串
Array.prototype.x = 'inherited';

for (i in arr) {
	//迭代时原型链上面的数据被读取
	console.log(arr[i]);//1,2,3,4,5,inherited
}

// 使用hasOwnProperty属性过滤掉原型链上面的数据
for(i in arr) {
	if(arr.hasOwnProperty(i)) {
		console.log(arr[i]);//1,2,3,4,5
	}
}

-----------------------------------------------------------
// 二维数组
var arr = [[0,1],[2,3],[4,5]];   //result
var i = 0,j = 0;
var row;
for (;i<arr.length;i++) {
	row = arr[i];
	console.log('row'+i)
	for(;j<row.length;j++) {
		console.log(row[j]);
	}
}

-----------------------------------------------------------
//数组方法
{} => Object.prototype;
[] => Array.prototype

------------------------------------------------------
// Array.prototype.join 将数组转化为字符串
var arr = [1,2,3]
arr.join();//"1,2,3"
arr.join("_")//"1_2_3"

function repeatSting(str,n) {
	return new Array(n+1).join(str);
}
repeatSting("a",3)//"aaa"
repeatSting("Hi",5)//"HiHiHiHiHi"

---------------------------------------------------------
// Array.prototype.reverse 将数组逆序
var arr = [1,2,3];
arr.reverse();//[3,2,1]
arr; //原数组被修改

----------------------------------------
// Array.prototype.sort排序
var arr = [13,24,51,3];
arr.sort();//[13,24,3,51] 原数组会被修改
arr;//[13,24,3,51] 默认按照成员首位数字进行排序

//使用对比大小排序
arr.sort(function(a,b){
	return a - b;
})//[3,13,24,51]

rr = [{age:25},{age:39},{age:99}];
arr.sort(function(a,b) {
	return a.age - b.age;
})
arr.forEach(function(item) {
	console.log('age',item.age);
})
//result:
//age 25 
//age 39 
//age 99

-------------------------------------------------------
// Array.prototype.concat数组合并
var arr = [1,2,3];
arr.concat(4,5);//[1,2,3,4,5]
arr;//[1,2,3] 原数组未被修改
arr.concat([10,11],13) //[1,2,3,10,11,13]

------------------------------------------------------
// Array.prototype.slice返回部分数组
var arr = [1,2,3,4,5]
arr.slice(1,3);//[2,3]
arr.slice(1);//[2,3,4,5] 原数组未被修改

----------------------------------------------------------
// Array.prototype.splice数组拼接
var arr = [1,2,3,4,5];
arr.splice(2);//return [3,4,5]
arr;//[1,2]; 原数组被修改

arr = [1,2,3,4,5];
arr.splice(2,2); //return [3,4]
arr;// [1,2,5]

arr = [1,2,3,4,5];
arr.splice(1,1,'a','b');//return [2];
arr; //[1,'a','b',3,4,5]

----------------------------------------------------------
// Array.prototype.forEach数组遍历
// 对数组进行循环迭代
var arr = [1,2,3,4,5];
arr.forEach(function(x,index,a) {
	console.log(x + '|' + index + '|' + (a === arr));
})
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true

---------------------------------------------------------------
// array.prototype.map数组映射
// 针对数组的所有成员进行统一操作
var arr = [1,2,3];
arr.map(function(x) {
	return x+10;
});//[11,12,13]
arr;//[1,2,3]原数组未被修改

--------------------------------------------------------------
// Array.prototype.filter 数组过滤
// 返回满足过滤条件的数组成员
var arr = [1,2,3,4,5,6,7,8,9,10];
arr.filter(function(x,index) {
	return index % 3 === 0 || x >= 8;
});//return [1,4,7,8,9,10]
arr; //[1,2,3,4,5,6,7,8,9,10] 原数组未被修改

--------------------------------------------------------------
// Array.prototype.every&some数组判断
// every只要数组成员中有一个不满足条件 就返回false 反之true
var arr = [1,2,3,4,5];
arr.every(function(x) {
	return x < 10;
}); //true

arr.every(function(x) {
	return x < 3;
})//false

// some只要数组成员中有一个满足条件 就返回true 反之false
arr.some(function(x) {
	return x === 3;
});//true

arr.some(function(x) {
	return x === 100;
});//false

--------------------------------------------------------------------
// Array.prototype.reduce&reduceRight 数组之间的两两操作
//reduce 由左至右 进行数组成员之间的两辆操作

//所有成员相加
var arr = [1,2,3]
var sum = arr.reduce(function(x,y) {
	return x+y
},0);//6
arr;//[1,2,3]原数组未被修改

// 找出成员中的最大值
arr = [3,9,6];
var max = arr.reduce(function(x,y) {
	console.log(x + "|" + y);
	return x > y ? x : y;
});
// 3|9
// 9|6
max; //9

//reduceRight 由右至左 进行数组成员之间的两辆操作

//找出成员中的最大值
max = arr.reduceRight(function(x,y) {
	console.log(x + "|" + y);
	return x > y ? x : y;
});
// 6|9
// 9|3
max; //9

-----------------------------------------------------------
// Array.prototype.indexOf&lastIndexOf 数组检索
var arr = [1,2,3,2,1];
arr.indexOf(2); //1
arr.indexOf(99); //-1,不存在返回-1
arr.indexOf(1,1); //4,从位置1开始

-----------------------------------------------------------
// Array.isArray 判断是否为数组
Array.isArray([]);//ture

[] instanceOf Array; //true
[].constryctor === Array; //true

-------------------------------------------------------------
字符串和数组
// 字符串属于类数组元素，可以使用类似数组的方式去操作字符串
var str = "hello world";
str.charAt(0); //"h"
str[1];//e

Array.prototype.join.call(str,"_");
//"h_e_l_l_o_ _w_o_r_l_d"
