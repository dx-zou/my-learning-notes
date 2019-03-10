// Array.prototype.unique = function () {
//     return this.filter((item,index) => {
//         return this.indexOf(item) === index;
//     })
// }
//
//
//
//


Array.prototype.unique = function(){
    return this.filter((item,index) => this.indexOf(item) === index)
};
// var arr = [1,1,3,'3','a','a',{},{},NaN,NaN,undefined,undefined,[1,2],[1,2]];
var arr = [1,1,'2','2','NaN','NaN']
console.log(arr.unique());