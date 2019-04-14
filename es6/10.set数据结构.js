//set 数据结构
const set = new Set('abcdefffggg')
console.log(set);
const set1 = new Set([1, 2, 3, 4, 5, 5])
console.log(set1);
console.log(set1.size);

//去除数组里的重复元素
const arr = [...new Set([1, 2, 3, 3, 4, 4, 5, 6])]
console.log(arr);
//去除字符串里的重复字符
const str = [...new Set('aabbccddeefff')].join('')
console.log(str);