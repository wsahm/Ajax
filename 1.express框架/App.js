//快速搭建一个基于express框架的web服务
//1. 引入express
const express = require('express');
//2. 生成一个express实例,
const app = express();
//3. 处理各种请求

//处理请求路径localhost:3000/index
app.get('/', (req, res) => {

    res.send("express 基础");//这里相当于不用框架时的  res.write+ res.end
});
//4. 监听3000端口
app.listen(3000, () => {
    console.log("服务启动成功");
});

