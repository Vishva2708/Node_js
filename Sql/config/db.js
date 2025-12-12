const mysql=require("mysql2")

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Vishva@2708",
    database:"Vishvadb"
})

con.connect((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("mysql connect")
    }
})

module.exports=con