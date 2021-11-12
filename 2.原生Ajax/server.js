//快速搭建一个基于express框架的web服务
//1. 引入express
const express = require('express');
//2. 生成一个express实例,
const app = express();
//3. 处理各种请求

//处理请求路径localhost:3000/index
app.get('/server', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
    res.send("hello ajax");//这里相当于不用框架时的  res.write+ res.end
});
app.post('/server', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','*');
    res.send("hello ajax posr");//这里相当于不用框架时的  res.write+ res.end
});
app.all('/server', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','*');
    res.send("hello ajax posr");//这里相当于不用框架时的  res.write+ res.end
});
//4. 监听8000端口
app.listen(8000, () => {
    console.log("服务启动成功");
});

