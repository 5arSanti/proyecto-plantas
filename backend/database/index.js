var mysql = require('mysql');

// DEV
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database: ""
});

// PROD
// var connection = mysql.createConnection({
//     host     : "",
//     user     : "",
//     password : "",
//     database: ""
// });



connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log("Conexión a la base de datos exitosa")
});

module.exports =  { connection };