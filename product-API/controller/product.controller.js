var dbcon = require("../config/db_connection");
var connection = dbcon.getConnection();
connection.connect();

 var express = require("express")
 var router = express.Router();
 router.get("/",(req,res)=>{
    connection.query("select * from product",(err ,records,fields)=>{
        if(err){
            console.error("error are fetching data")
        }
        else{
            res.send(records);
        }
    })
    

 })

 module.exports = router;