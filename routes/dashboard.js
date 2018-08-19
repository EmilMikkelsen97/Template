module.exports = (app) => {
    app.get('/dashboard', function (req, res) {

        var user = req.session.user;
        var userId = req.session.userId;
        console.log(`Debug: Session.userID is ${userId}`);

        if (userId == null) {
            res.redirect("/");
            return;
        } if (userId !== 4){
            res.redirect("/contact");
            return;
        }

        var sql = "SELECT * FROM users WHERE id = ?";

        let sodavand = [
            { name: 'Coca Cola', role: "Cola" },
            { name: 'Pepsi', role: "Cola" },
            { name: 'Jolly Cola', role: "Cola" },
            { name: 'Faxe Kondi', role: "Gude drik" },
            { name: 'Sprite', role: "Sportsvand" },
            { name: 'Fanta', role: "Pis" }
        ];

        let productPrice = req.session.productPrice;
        let productCount = req.session.productCount;
        
        db.query(sql, [userId], function (err, results) {
            res.render('pages/dashboard', { 
                user: user,
                sodavand: sodavand,
                productPrice: productPrice,
			    productCount: productCount,
            });
        });
    });
};