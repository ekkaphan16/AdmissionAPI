var db=require('../dbconnection');

var Registra={

getAllRegistra:function(callback){

return db.query("Select * from registra",callback);

},
getRegistraById:function(id,callback){

    return db.query("select * from registra where id=?",[id],callback);
},
addRegistra:function(Registra,callback){
   console.log("inside service");
   console.log(Registra.id);
return db.query("Insert into registra values(?,?,?)",[Registra.id,Registra.studentname,Registra.studentsurname],callback);
//return db.query("insert into Registra(id,Title,Status) values(?,?,?)",[Registra1.id,Registra1.Title,Registra1.Status],callback);
},
deleteRegistra:function(id,callback){
    return db.query("delete from registra where id=?",[id],callback);
},
updateRegistra:function(id,Registra,callback){
    return  db.query("update registra set studentname=?,studentsurname=? where id=?",[Registra.studentname,Registra.studentsurname,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].id;
   }
   return db.query("delete from registra where id in (?)",[delarr],callback);
}
};
module.exports=Registra;