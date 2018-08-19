module.exports = (app) => {
    app.get('/contact', function (req, res) {
        res.render('pages/contact');
    });
};