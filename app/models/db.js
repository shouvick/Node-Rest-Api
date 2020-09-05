const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

//create connection 
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error=>{
    if(error) throw errow;
    console.log("Successfully Connect to Database");
});

module.exports = connection;
