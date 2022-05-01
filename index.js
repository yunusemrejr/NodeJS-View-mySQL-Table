const mysql= require('mysql');
const express= require('express');
var app=express();
const bparser= require('body-parser');

app.use(bparser.json());

var mysqlCon=mysql.createConnection({
    host: 'localhost',
    user: 'root',

    database:'userdb'
});

mysqlCon.connect((err)=>{
    if(!err){
        console.log("connected succesfully.")
    }
    else{
        console.log("connection failed\n Error Msg:" +JSON.stringify(err));
    }
});


app.listen(3003,()=>console.log('express server is running at port 3003'));

app.get('/users',(res,req)=>{
mysqlCon.query("select * from users",(err,rows,fields)=>{
if(err){
    console.log(err);
}
else{
    console.log(rows);
}
})
});