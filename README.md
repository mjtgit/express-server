# express-server
### express是基于node的一个框架，这里只是使用了一个服务模块儿，相当于本地启动了一个服务器，把自己写的需要服务器环境的项目放在dist文件夹中，借助所以起的服务环境运行。

## 使用说明（这里说的不是全局安装express，而是局部安装的方法）：
### 1、cd到当前的文件夹下，运行 npm install
### 2、启动服务，运行 node server.js


## 下面是借鉴网上的更完整的使用说明
### 1、创建一个文件夹，cd 到当前文件夹 ，运行 npm init 创建package.json
### 2、使用vscode打开当前文件，开启vscode 终端 cd 到当前文件夹下 touch server.js (创建入口文件)
### 3、在当前文件夹下安装express 模块 npm install express
### 4、在server.js 编写代码
```shell
  const express = require("express");//引入express
  const app = express();//实例化一个express APP

  app.get("/",(req,res)=>{

      res.send("Hello World");
  }) //设置路由

  const port = process.env.port || 5000;//定义端口号

  app.listen(port,()=>{
      console.log(`Server running on port ${port}`);
  }) //监听
```
### 5、使用 node server.js 启动服务 (这样启动的话每次改变代码都需要重启)
### 6、安装 nodemon ：sudo npm install nodemon -g (Mac系统全局安装，Windows可去掉sudo)
### 7、然后就可以使用 nodemon server.js 启动 服务 ，这样以后改变代码，它就会帮我们自动保存
### 8、配置package.json 设置启动方式
```shell
  "scripts": {
    "start": "node server.js",
    "server":"nodemon server.js"
  },
```
### 9、这样的话 可以使用 npm run start 和 npm run server 启动服务














