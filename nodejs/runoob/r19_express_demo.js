/**
 * Created by sf on 2017/6/24.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例访问地址是http://' + host + port);
});