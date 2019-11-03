const express = require("express");
const path = require("path");
const app = express();
// 引入router 模块
const router = require("./router/router");
app.use(router);
// 托管静态资源
app.use(express.static("./views"));
// 设置模板引擎
app.set("view engine", "ejs");
app.set("views", "./ejs-pages");
const mysql = require("mysql");
const bodyParser = require('body-parser');
app.user(bodyParser.urlencoded({extended: false}));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node_learning"
});
// 查询
let sql = "Select * from user";
// 新增
let sql1 = "insert into user set ?";
const user = { name: "feng", age: 28, password: 123456 };
// connection.query(sql1, user ,(err,res) => {
//   if(err) return;
//   console.log(res)
// });
// 修改
let sql2 = "update user set ? where id = ?";
const user2 = { id: 1, name: "feeng", age: 28, password: 123456 };
connection.query(sql2, [user2, user2.id], (err, res) => {});
// 删除
let sql3 = 'delete from user where id = ?';
// 监听服务端口
app.listen(3000, res => {
  console.log("server is running at port 3000");
});
