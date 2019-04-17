function Person(name, age, gender) {
    if (this instanceof Person) {
        this.name = name
        this.age = age
        this.gender = gender
    } else {
        return new Person(name, age, gender)
    }
}

var person1 = new Person('hh', 28, 'man')
var person2 = Person('哈哈',29,'woman')
// console.log(window.name)
console.log(person1.name)
console.log(person2.name)