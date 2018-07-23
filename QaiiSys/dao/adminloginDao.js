var pool=require('../conf/db');
var $sql=require('./adminloginSqlMapping');
module.exports={
    selectAlladminInfo:function(callback){
        pool.getConnection(function(err,connection){
            connection.query($sql.selectalladmininfo,function(err,results,fields){
                if(err) throw err;
                connection.release();
                callback(results)
            })
        })
    }   
};