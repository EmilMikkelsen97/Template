module.exports = (app) => {

	app.get('/', function (req, res) {
		res.render('pages/login');
	});
	
	// ================================================================

	app.post('/login', function (req, res) {

		var message = '';
		var sess = req.session;

		var post = req.body;
		var name = post.user_name;
		var pass = post.password;

		var sql =`
			SELECT
				id,
				first_name,
				last_name,
				user_name
			FROM users
			WHERE
				user_name = ? AND password = ?
		`;

		db.query(sql, [name, pass], function (err, results) {
			if (results.length) {
				req.session.userId = results[0].id;
				req.session.user = results[0];
				// console.log(results[0].id);
				res.redirect('/dashboard');
			}
			else {
				message = 'Wrong credentials.';
				res.render('pages/login', { message: message });
			}
		});
	});
};