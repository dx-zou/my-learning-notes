console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Number);
console.log(typeof Boolean);
console.log(typeof String);
console.log(typeof Object);
console.log(typeof []);
console.log(typeof new Date());
console.log(typeof '');
console.log(typeof {});
console.log(typeof 123);
console.log(typeof true);
console.log('--------------------------------------');
console.log(Object.prototype.toString.call(123));
console.log(Object.prototype.toString.call('123'))
console.log(Object.prototype.toString.call([]))
console.log('--------------------------------------');
console.log(Array.isArray([1,2,3]));
console.log([1,2,3] instanceof Array);
console.log([1,2,3] instanceof Object);

