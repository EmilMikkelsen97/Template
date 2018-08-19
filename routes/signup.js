module.exports = (app) => {
    app.get('/signup', function (req, res) {
		res.render('pages/signup');
	});

	
	// ================================================================


	app.post('/signup', function (req, res) {
		var message = '';
		var post = req.body;
		var name = post.user_name;
		var pass = post.password;
		var fname = post.first_name;
		var lname = post.last_name;
		var mob = post.mob_no;

		// TODO: Tilføj validering af resten af de indtastede oplysninger!

		if (name != "" && pass != "") {
		
			var sql = `
				INSERT INTO users
				SET
					first_name = ?,
					last_name = ?,
					mob_no = ?,
					user_name = ?,
					password = ?
				`;

			db.query(sql, [fname, lname, mob, name, pass], function (err, result) {
				if (err) {
					console.log ("signup error: " + err);
				}
				else {
					message = "Succesfully! Your account has been created.";
					res.render('pages/signup', {
						message: message,
						messageType: "alert-success",
						showForm: false
					});
				}

			});
		}
		else {
			message = "Username and password are required!";
			res.render('pages/signup', {
				message: message,
				messageType: "alert-danger"
			});
		}
	});
};