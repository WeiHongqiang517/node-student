const mysql = require('mysql');

const DBConnection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'whq5050517.',
    database: 'student'
})

DBConnection.connect(function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('connected as id ')
});