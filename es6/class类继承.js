class Animal {
  constructor(name, age, color) {
    this.name = name
    this.age = age
    this.color = color
  }
  introduction() {
    console.log(`name: ${this.name},age: ${this.age},color:${this.color}`);
  }
}
let animal = new Animal('animal', 1, 'white')
animal.introduction()
//
class Dog extends Animal {
  constructor(name, age, color, action) {
    super(name, age, color)
    this.action = action
  }
  toString() {
    console.log(super.introduction())
  }
}
let dog = new Dog('大黄', 1, 'yellow')
dog.toString()