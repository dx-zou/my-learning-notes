// 1. 深拷贝 - JSON 正反序列化
// 缺点就是无法拷贝 undefined、function、symbol 这类特殊的属性值。
function deepClone1(origin) {
    return JSON.parse(JSON.stringify(origin))
}
var obj = {
    a: 1,
    b: {c: 2},
    d: function() {
        console.log('deepClone')
    }
}
var test = deepClone1(obj)
console.log(test)
test.a = 2
test.b.c = 3
console.log(obj)

// 2. 深拷贝 - 递归;
function deepClone2(origin) {
    let result = origin.constructor === Array ? [] :  {}
    for(let key in origin) {
         // 不遍历原型链上的属性
        if(origin.hasOwnProperty(key)) {
            if (origin[key] && typeof origin[key] === 'object') {
                result[key] = origin[key].constructor === Array ? [] : {}
                result[key] = deepClone2(origin[key])
            } else {
                result[key] = origin[key]
            }
        }
    }
    return result
}

var obj2 = {
    a: 1,
    b: 'b',
    c: {name: 'feng'},
    d: function() {
        console.log(this)
    }
}
var o = deepClone2(obj2)
console.log(o)
o.c.name = 'feeng'  //不影响原对象
console.log(o)
console.log(obj2)