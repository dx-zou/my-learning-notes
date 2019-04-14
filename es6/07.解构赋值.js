// const {
//   name,
//   age,
//   color
// } = {
//   name: "hh",
//   age: 18,
//   color: 'white'
// }
// console.log(name, age, color);

let obj = {
  name,
  age,
  color
} = {
  name: "hh",
  age: 18,
  color: 'white',
  gender: 'male'
}
// console.log(obj);

let obj2 = {
  ...obj
}

// console.log(obj2);

const params = {
  name: '123',
  title: '456',
  type: 'aaa'
}
var {
  type,
  ...other
} = params;

console.log(type);
console.log({
  ...other
});