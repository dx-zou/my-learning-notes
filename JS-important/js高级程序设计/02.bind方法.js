function bind(func,context) {
    //闭包
    return function() {
        return func.apply(context,arguments)
    }
}

var obj = {
    desc: 'bind 方法',
    handler() {
        console.log('handler的this指向obj')
        console.log([...arguments])
    }
}
bind(obj.handler,obj)(1,2,3)