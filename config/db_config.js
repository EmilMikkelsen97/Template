const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'login_ejs'
});

connection.connect();

global.db = connection;