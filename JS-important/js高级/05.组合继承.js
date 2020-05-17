// 组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。
function ParentType(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
ParentType.prototype.say = function() {
    console.log('this is ParentType')
}
function ChildType(score) {
    ParentType.call(this)
    this.score = score
}
ChildType.prototype = new ParentType() || Object.create(ParentType.prototype)
ChildType.prototype.constructor = ChildType
ChildType.prototype.study = function() {
    console.log('this is studying front-end')
}

let child = new ChildType(100)

child.study()