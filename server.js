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

app.all('/json_server', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','*');
	const data={
		name:"ws",
		age:18
	}
	let str=JSON.stringify(data);
	res.send(str);
    // res.send("hello ajax posr");//这里相当于不用框架时的  res.write+ res.end
});
app.all('/ie', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','*');
    res.send("hello ajax IE5");//这里相当于不用框架时的  res.write+ res.end
});

app.all('/delay', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	setInterval(()=>{
		res.send("延时显示");
	},3000)
    //这里相当于不用框架时的  res.write+ res.end
});

app.all('/jquery_server', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	const data={
		name:"ws",
		age:18
	}
	res.send(JSON.stringify(data));
    //这里相当于不用框架时的  res.write+ res.end
});
app.all('/axios_server', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','*');
	const data={
		name:"ws",
		age:18
	}
	res.send(JSON.stringify(data));
    //这里相当于不用框架时的  res.write+ res.end
});

app.all('/fetch_server', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','*');
	const data={
		name:"ws",
		age:18
	}
	res.send(JSON.stringify(data));
    //这里相当于不用框架时的  res.write+ res.end
});

app.all('/check_server', (req, res) => {
	// 设置允许跨域
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','*');
	const data={
		exist:1,
		msg: '用户名已存在'
	};
	let str=JSON.stringify(data);
	res.end(`handle(${str})`);
});

app.all('/jquery_jsonp_server', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','*');
	const data={
		exist:1,
		msg: '用户名已存在'
	};
	let str=JSON.stringify(data);
	let cb=req.query.callback;
	res.end(`${cb}(${str})`);
});

//4. 监听8000端口
app.listen(8000, () => {
    console.log("服务启动成功...");
});

