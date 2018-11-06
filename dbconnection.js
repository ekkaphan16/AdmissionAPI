var mysql=require('mysql');
var connection=mysql.createPool({

host:'202.29.22.75',
user:'tcas_user',
password:'NoThePass',
database:'tcas_db'


});
module.exports=connection;