//引入express框架
var express = require('express');
//定义一个变量调用express各种方法
var app = express();

// app上有很多匹配请求方法 app.get app.post app.put app.delet
//app定义路由，其实也是一个函数，定义的很多方法
//当客户端以GET方式访问服务器/路由时候，会有那个函数进行处理
// * 代表所有的路径
app.get('*', function(request, response){
    if (!request.url) request.url = 'index.html'
    response.sendFile(__dirname + '/dist' + request.url)
    // response.send('Hello!');
})
app.listen(8888, 'localhost', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Server runing at http://localhost:8888/")
    }
})
