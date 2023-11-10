// asynchronous javascript

// ! 先执行同步代码，再执行异步代码
// ! 同步代码执行完毕后，再执行异步代码

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Jenkin");

// promise -> async/await
// ! async/await
// ! async/await 是 promise 的语法糖
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  // console.log(data);

  return data;
}

// * getTodos()一直会是一个promise，如果想要获取到数据，需要使用then，不然会返回一个pending状态的promise
const todos = getTodos();
console.log(todos);
