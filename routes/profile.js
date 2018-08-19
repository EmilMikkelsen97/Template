module.exports = (app) => {
    app.get('/profile', function (req, res) {

        var userId = req.session.userId;
        if (userId == null) {
            res.redirect("/");
            return;
        }

        req.session.productPrice = 400;
		req.session.productCount = 10;

        var sql = "SELECT * FROM users WHERE id = ?";
        db.query(sql, [userId], function (err, result) {
            res.render('pages/profile', { data: result });
        });
    });
};