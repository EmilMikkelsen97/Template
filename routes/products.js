module.exports = (app) => {
    app.get('/products', function (req, res) {
        res.render('pages/products');
    });
};