var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.get('/', function (req, res) {
   // res.cookie('username','blue',{maxAge:30*1000}); //1000是有效期1秒
   res.send('Hello World');
});
var server = app.listen(84, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
//修改内容后要重启服务器