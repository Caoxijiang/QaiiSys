
var mysql=require('mysql');
var $util=require('../util/util');
var mysqlconf= {
		host: 'localhost', 
		user: 'root',
		password: '123456',
		database:'QaiiSys', // 前面建的user表位于这个数据库中
		port: 3306,
		dataStrings:true
	}

    var pool  = mysql.createPool($util.extend({},mysqlconf));
    module.exports=pool;