const restify = require('restify');
const path = require('path');
const mysql = require(path.join(__dirname, '..', 'config', 'db_config'));

module.exports = (app) => {
   app.get('/products', (req, res, next) => {
      let db = mysql.connect();
      db.execute(`SELECT * FROM products`, [], (err, rows) => {
         if (err) {
            console.log(err);
         } else {
            res.json(200, rows);
         }
      })
      db.end();
   });

   app.get('/products/:id', (req, res, next) => {
      let id = (isNaN(req.params.id) ? 0 : req.params.id);
      if (id > 0) {
         let db = mysql.connect();
         db.execute(`SELECT * FROM products WHERE id = ?`, [req.params.id], (err, rows) => {
            if (err) {
               console.log(err);
            } else {
               res.json(200, rows);
            }
         })
         db.end();
      } else {
         res.json(400, {
            message: 'id ikke valid'
         });
      }
   });

   app.post('/products', (req, res, next) => {

      let name = (req.body.name == undefined ? '' : req.body.name);
      let description = (req.body.description == undefined ? '' : req.body.description);
      let price = (req.body.price == undefined ? 0 : req.body.price);
      let image = (req.body.image == undefined ? '' : req.body.image);
      // price = price.replace(',', '.');

      if (name != '' && description != '' && !isNaN(price) && id > 0 && image != '') {
        // if (name != '' && description != '' && !isNaN(price)) {

         let db = mysql.connect();
         db.execute(`INSERT INTO products SET name = ?, description = ?, price = ?`, [name, description, price], (err, rows) => {
            if (err) {
               console.log(err);
            } else {
               res.json(200, rows);
            }
         })
         db.end();
      } else {
         res.json(400, {
            message: 'validering fejlede'
         });
      }
   });

   app.put('/products/:id', (req, res, next) => {

       let name = (req.body.name == undefined ? '' : req.body.name);
       let description = (req.body.description == undefined ? '' : req.body.description);
       let price = (req.body.price == undefined ? 0 : req.body.price);
       let id = (isNaN(req.params.id) ? 0 : req.params.id);
       let image = (req.body.image == undefined ? '' : req.body.image);
      price = price.replace(',', '.');

      if (name != '' && description != '' && !isNaN(price) && id > 0) {
        //    && !isNaN(number)

         let db = mysql.connect();
         db.execute(`UPDATE products SET id = ?, name = ?, description = ?, img = ?, price = ?, WHERE id = ?`, [id, name, description, img, length, price, date, hall, fk_event], (err, rows) => {
            // db.execute(`UPDATE produkt SET navn = ?, beskrivelse = ?, pris = ? WHERE id = ?`, [name, description, price, id], (err, rows) => {
            if (err) {
               console.log(err);
            } else {
               res.json(200, rows);
            }
         })
         db.end();
      } else {
         res.json(400, {
            message: 'validering fejlede'
         });
      }
   });

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

   // ========================== static
   app.get('/.*', restify.plugins.serveStatic({
      'directory': 'public',
      'default': '/'
   }));
}