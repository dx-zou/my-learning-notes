//
// async await 学习案例 from ryf es6教程
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
  return value;
}
// 模拟sleep 函数 每隔2s执行一次
function sleep(interval) {
  return new Promise(resolve => setTimeout(resolve, interval));
}
async function printSleep(interval) {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    await sleep(interval);
  }
}
// printSleep(2000);

// await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。
async function fn() {
  await Promise.reject("error");
}
// fn()
//   .then(res => {console.log(res)})
//   .catch(error => console.log(error));

// 任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
/*
 * 有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。
 * 这时可以将第一个await放在try...catch结构里面，
 * 这样不管这个异步操作是否成功，第二个await都会执行。
 * */
async function fn2() {
  try {
    await Promise.reject("出错啦！");
  } catch (e) {
    console.log("errorInfo", e);
  }
  return await Promise.resolve("成功啦");
}
// fn2();
// fn2().then(res => console.log(res));

async function fn3() {
  // await Promise.reject('错误了').catch(e => console.log(e))
  await new Promise(reject => {
    throw new Error("送你一个错误");
  }).catch(error => console.log("捕获到错误消息了：", error));
  return await new Promise(resolve => resolve("错误消息不会影响到我的执行"));
}
// fn3().then(res => console.log(res));

// 使用try...catch结构，实现多次重复尝试
// const superagent = require("superagent");
const NUM_RETRIES = 3;

async function test() {
  let i;
  for (i = 0; i < NUM_RETRIES; ++i) {
    try {
      await superagent.get("http://google.com/this-throws-an-error");
      break;
    } catch (err) {}
  }
  console.log(i); // 3
}
