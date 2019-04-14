const map = new Map()
let obj = {
  name: 'feng'
}
map.set(obj, 'this is map ')

console.log(map.get(obj));
//Map 接受数组作为参数
const map1 = new Map([
  ['name', 'feng'],
  ['job', 'frontEnd']
])
console.log(map1);

//也可以接受Set 做为参数
const set = new Set([
  ['name', 'feeng'],
  ['age', 18]
])
const map2 = new Map(set)
console.log(map2.get('name'));
//遍历map
for (let [key, value] of map2) {
  console.log(key + '---' + value);
}
//转换为数组结构
console.log([...map2]);