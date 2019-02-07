//1、原型链继承
// 构造函数、原型和实例之间的关系：每个构造函数都有一个原型对象，
// 原型对象都包含一个指向构造函数的指针，而实例都包含一个原型对象的指针。
// 继承的本质就是复制，即重写原型对象，代之以一个新类型的实例
// 原型链方案存在的缺点：多个实例对引用类型的操作会被篡改。
function ParentType(name) {
    this.name = name
}
ParentType.prototype.getInfo = function() {
    console.log('this is ParentType')
}
function ChildType(name,age) {
    this.name = name;
    this.age = age;
}
ChildType.prototype = new ParentType()
let instance = new ChildType('feng',18)
console.log(instance.name)
console.log(instance.age)
instance.getInfo()