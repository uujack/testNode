var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cook=require('cookie-parser');//cookie

// var mysql      = require('mysql');//数据库
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'hu_feng_lin'
// });
 
// connection.connect();//链接数据库
// app.use(cook());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.get('/', function (req, res) {
   // res.cookie('username','blue',{maxAge:30*1000}); //1000是有效期1秒
   res.send('Hello World');
});
// app.get('/cookie', function (req, res) {
//    res.send('Hello World'+req.cookies.username);
// });

// 	app.get('/my/inset',function (req,res) {
// 		var name=req.query.name;
// 		var password=req.query.password;
// 		var  addSql = 'INSERT INTO name_2(name,password) VALUES(?,?)';
// 		var  addSqlParams = [name, password];
// 		//向数据库增加一条记录
// 		connection.query(addSql,addSqlParams,function (err, result) {
// 		        if(err){
// 		         console.log('[INSERT ERROR] - ',err.message);
// 		         return;
// 		        } 
// 		        console.log(result);
// 		});
// 	});
// 	// 插入注册的用户名和密码到数据库
// var sql='SELECT * FROM name_2';

// connection.query(sql,function (err, result) {
//         if(err){
//           console.log('[SELECT ERROR] - ',err.message);
//           return;
//         }
//  		var objs=result;
//  		console.log(result);
// 	app.get('/my/zu_ce',function (req,res) {
// 			var operate=false;
// 			for(var prop in objs)
// 			{
// 				if(req.query.username==objs[prop].name)
// 				{
// 					operate=true;
// 					break;
// 				}
// 			}
// 		   if (operate==true) 
// 		   {
// 		   	res.send('注册失败');
// 		   }
// 		   else
// 		   {
// 		   	res.send('注册成功');
// 		   }
// 	});
// 	// 注册响应请求
// 	app.get('/my/json',function(req,res){
// 		var name=req.query.name;
// 		var password=req.query.password;
// 		var newobj={"name":name,"password":password};	
// 		objs.push(newobj);	
// 		res.send(objs);	
// 	});
// 	app.get('/my/deng_ru',function (req,res) {
// 			var operate=false;
// 			 var expires=null;
// 			for(var prop in objs)
// 			{
// 				if(req.query.username==objs[prop].name && req.query.password==objs[prop].password)
// 				{
// 					operate=true;
// 					if(req.query.cookie==1){
// 						expires=10*1000;
// 					}else if(req.query.cookie==7){
// 						expires=7*24*60*60*1000;
// 					}
					
// 					break;
// 				}
// 			}
// 		   if (operate==true) 
// 		   {
// 		   	res.cookie('currentUsername',req.query.username,{maxAge:expires});
// 		   	res.send('登录成功');
// 		   }
// 		   else
// 		   {
// 		   	res.send('登录失败');
// 		   }
// 	});
// 	// 登录判定成功
// 	app.get('/my/cookie', function (req, res) {
// 		if (req.cookies.currentUsername) 
// 		{
// 			for(var j in objs)
// 	   		{
// 			   if ((req.cookies.currentUsername==objs[j].name)){
// 			   		res.send(objs[j]);	//返回的是一个json对象，不是值
// 			   		break; 
// 			   }
// 			}
// 		}
// 	    else{
// 	    	res.send({"msg":"hack"});
// 	    }
// 	});
// 	//cookie设置
// 	console.log(result);
// });
// var money=[];
// app.get('/my/go_wu_json',function(req,res){
// 	var id=req.query.iid;
// 	var dan = req.query.dan_jia;
// 	var su_liang = req.query.su_liang;
// 	var yi_s = req.query.yi_s;
// 	var feng_su = req.query.feng_su;
// 	var ren_su = req.query.ren_su;

// 	var newmoney={"id":id,"dan_jia":dan,"su_liang":su_liang,'yi_s':yi_s,'feng_su':feng_su,'ren_su':ren_su};
// 	money.push(newmoney);
// 	var  addSql = 'INSERT INTO money_1(id,dan_jia,su,y_so,feng,ren) VALUES(?,?,?,?,?,?)'
// 	var  addSqlParams = [id,dan,su_liang,yi_s,feng_su,ren_su];
// 		//向数据库增加一条记录
// 		connection.query(addSql,addSqlParams,function (err, result) {
// 		        if(err){
// 		         console.log('[INSERT ERROR] - ',err.message);
// 		         return;
// 		        } 
// 		});
// 		// 插入数据

// 		var sql ='select * from money_1';
// 		connection.query(sql,function(err,result){
// 			if(err){
// 				console.log(err.message);
// 				return;
// 			}
// 		});
// 	//查看数据库 

// 	res.send(money);
// });
// app.get('/my/money',function(req,res){
// 		// console.log(money[money.length-1]);
// 	res.send(money[money.length-1]);
// });
// var ding_xin=[];
// app.get('/my/go_wu_ce',function(req,res){
// 	var xiang_mu=req.query.xiang_mu;
// 	var ce_su=req.query.ce_su;
// 	var jin_er=req.query.jin_er;
// 	var newding={'xiang_mu':xiang_mu,'ce_su':ce_su,'jin_er':jin_er};
// 	ding_xin.push(newding);
// 	res.send(ding_xin);
// });
// app.get('/my/ding_m',function(req,res){
// 	res.send(ding_xin[ding_xin.length-1]);
// });
// app.get('/my/ding_t',function(req,res){
// 	res.send();
// });

// var zi_fu=[];
// app.get('/my/fu_kuan_list',function(req,res){
// 	var que_zi=req.query.que_zi;

// 	var newzi_fu={"que_zi":que_zi};
// 	zi_fu.push(newzi_fu);

// 	res.send(zi_fu);
// });
// app.get('/my/que_zi',function(req,res){
// 		// console.log(money[money.length-1]);
// 	res.send(zi_fu[zi_fu.length-1]);
// });//支付功能


// var col=[];
// app.get('/my/fu_kuan_col',function(req,res){
// 	var col=req.query.col;

// 	var newc={"col":col};
// 	col.push(newc);

// 	res.send(col);
// });
// app.get('/my/zi_col',function(req,res){
// 		// console.log(money[money.length-1]);
// 	res.send(col[col.length-1]);
// });//支付功能
var server = app.listen(84, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
//修改内容后要重启服务器