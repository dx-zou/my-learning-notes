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
    return this.filter((item,index) => {
        return this.indexOf(item) === index;
    })
};

var arr = [1,1,2,2,3,'3','a','a','bbb','bbb'];
console.log(arr.unique());