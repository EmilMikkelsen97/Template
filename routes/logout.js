module.exports = (app) => {
    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            res.redirect("/");
        });
    });
};