var mysql = require('mysql') 
var connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    port: "3306",
    database: "crud"
})

connection.connect(function (err) {
    if(err) {
        console.log("error", err.sqlMessage)
    }
    else{
        console.log("connection established ")
    }
})

module.exports = connection