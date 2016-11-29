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
