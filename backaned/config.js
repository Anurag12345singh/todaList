const mysql = require('mysql')
 
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Golu@12345",
    database:"todo",
    port:3306
})

connection.connect((err)=>{

    if(err){
        console.log("Database not connected",err)
    }else{
        console.log("Database connected successfully")
    }
})

module.exports = connection;