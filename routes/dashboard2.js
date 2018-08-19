module.exports = (app) => {
    app.get('/dashboard2', function (req, res) {
// ----------------------------------------------------------------
//:: Tjekker om du er logget ind
        var user = req.session.user;
        var userId = req.session.userId;
        console.log(`Debug: Session.userID is ${userId}`);

        if (userId == null) {
            res.redirect("/");
            return;
        }
// ----------------------------------------------------------------
//:: opretter produkter
        app.post('/products', function (req, res) {
            let message = '';
            let post = req.body;
            let name = post.name;
            let description = post.description;
            let img = post.img;
            let price = post.price;
    
            if (name != "", description != "", img != "", price != "") {
                let sqlPOST = `
                    INSERT INTO products
                    SET
                        name = ?,
                        description = ?,
                        img = ?,
                        price = ?
                    `;
    
                db.query(sqlPOST, [name, description, img, price], function (err, results) {
                    if (err) {
                        console.log ("POST error: " + err);
                    }
                    else {
                        message = "Succesfully!";
                        res.render('pages/dashboard2', {
                            message: message,
                            messageType: "alert-success",
                            showForm: false
                        });
                    }
                });
            }
            else {
                message = "Felterne skal være udfyldt!";
                res.render('pages/dashboard2', {
                    message: message,
                    messageType: "alert-danger"
                });
            }
        });
// ----------------------------------------------------------------
app.delete('/products/:id', (req, res, next) => {
    let id = (isNaN(req.params.id) ? 0 : req.params.id);
    if (id > 0) {
       let db = mysql.connect();
       db.execute(`DELETE FROM products WHERE id = ?`, [req.params.id], (err, rows) => {
          if (err) {
             console.log(err);
          } else {
             res.json(204);
          }
       })
       db.end();
    } else {
       res.json(400, {
          message: 'id ikke valid'
       });
    }
 });
// ----------------------------------------------------------------
        var sql = "SELECT * FROM users WHERE id = ?";
        db.query(sql, [userId], function (err, results) {
            res.render('pages/dashboard2', { 
                user: user
            });
        });
    });
};