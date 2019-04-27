var flag = true;
function log(arg) {
    if (flag) {
        return console.log(arg)
    }
}
// 数组浅拷贝
function shallowCopy1(origin) {
    return origin.slice()
}
function shallowCopy2(origin) {
    return origin.concat()
}
function shallowCopy3(origin) {
    let result = []
    for (var i = 0; i < origin.length; i++) {
        result.push(origin[i])
    }
    return result
}
var arr = [1,2,3,'a','b','c']
var arr2 = shallowCopy3(arr)
// log(arr2)
arr2[2] = 4
// log(arr)
// log(arr2)

//浅拷贝对象
function shallowCopy4(origin={}) {
    return Object.assign({},origin)
}
var obj = {
    a: 1,
    b: 'bbb',
    c: {name:'feng'},
}
var test = shallowCopy4(obj)
test['d'] = 'ddd'
log(obj)
test.c.name = 'feeng'
log(JSON.stringify(obj))