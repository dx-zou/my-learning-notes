function flatten(arr) {
    var result = []
    for(var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

function flatten2(arr) {
    return arr.reduce(function(prev,next) {
        return prev.concat(Array.isArray(next) ? flatten2(next) : next)
    },[])
}
function flatten3(arr) {
    while (arr.some(item => Array.isArray(item))) {  
        arr = [].concat(...arr)
    }
    return arr
}
var arr = ["a", "b", ["c", "d"], [["d"],"e"], "f"];
console.log(flatten3(arr));
