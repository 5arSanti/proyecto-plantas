var mysql = require('mysql');

// DEV
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database: "app_e"
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log("Conexión a la base de datos exitosa")
});

module.exports =  { connection };