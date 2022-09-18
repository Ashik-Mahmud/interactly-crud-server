const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "contacts"
});

db.connect((err) => {
    if(err) return console.log(err);
    console.log("Connected to Database");
})


module.exports = db;