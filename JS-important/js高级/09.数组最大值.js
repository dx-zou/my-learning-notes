//1.排序
var arr = [1,22,33,100,66,77,23,7]
arr.sort((a,b) => b-a)
console.log(arr[0]);
//借用扩展运算符
console.log(Math.max(...arr));
//借用apply
console.log(Math.max.apply(null,arr));
