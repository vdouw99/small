# Node入门

第一个Node.js应用：“Hello World”      node helloworld.js
只是在node面板看看而已

一个基础的HTTP服务器     node server.js     接下来，打开浏览器访问http://localhost:8888/，你会看到一个写着“Hello World”的网页。

换个方式来写，就是2server.js

Node.js中自带了一个叫做“http”的模块，我们在我们的代码中请求它并把返回值赋给一个本地变量。

我们的本地变量变成了一个拥有所有“http”模块所提供的公共方法的对象。

OK，执行node 3index.js  打开localhost:8888，还是一个hello world矗立在我个面前，但你理解了其处理过程么？

我们现在可以把我们的应用的不同部分放入不同的文件里，并且通过生成模块的方式把它们连接到一起了。

我们仍然只拥有整个应用的最初部分：我们可以接收HTTP请求。但是我们得做点什么——对于不同的URL请求，服务器应该有不同的反应。

处理不同的HTTP请求在我们的代码中是一个不同的部分，叫做“路由选择”。

请求一个   node 4index.js   ，你将会看到应用输出相应的信息，这表明我们的HTTP服务器已经在使用路由模块了，并会将请求的路径传递给路由

执行 node 5index.js，打开localhost:8888/start，在node面板中显示“Request handler 'start' was called”，你应该懂了点什么。。




