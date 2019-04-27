function deepClone(obj) {
    //先判断obj是不是对象，如果不是终止执行
    if (typeof obj !== 'object') return
    let result = obj instanceof Array ? [] : {}
    for(var key in obj) {
        //不遍历原型上的属性
        if (obj.hasOwnProperty(key)) {
            result[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key]
        }
    }
    return result
}
let obj = {
    a: 1,
    b: [1,2,3],
    c: {name:'feng',age: 18}
}
let res = deepClone(obj)
console.log(res);
res.c.name = 'hello'
res.b[3] = 4
console.log(res);
console.log(obj);
