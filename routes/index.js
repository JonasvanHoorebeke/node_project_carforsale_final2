var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
  database: 'db_carforsale',
  debug: false
});





/* ROUTES API */

/* GET API generate all annonces */
router.get('/api/all', (req, res, next) => {
  db.query('SELECT * FROM tb_annonce', (err, rows, fields) => {
    if(!err)
    res.send(rows);
    else
    console.log(err)
  })
});


/* GET API generate specific annonce */
router.get('/api/:id', (req, res, next) => {
  db.query('SELECT * FROM tb_annonce WHERE id = ?', [req.params.id],(err, rows, fields) => {
    if(!err)
    res.send(rows);
    else
    console.log(err)
  })
});

/*POST API add new annonce*/
router.post('/api/add', function (req, res) { 
  let marque = req.body.marque; 
  let modele = req.body.modele;
  let annee = req.body.annee;
  let kilometrage = req.body.kilometrage;
  let prix = req.body.prix;
console.log(marque+" "+modele+" "+annee+" "+kilometrage+" "+prix);
  if (!marque && !modele && !annee && !kilometrage && !prix) {
      return res.status(400).send({ error:true, message: 'Please provide Information to be add' });
  }
  db.query("INSERT INTO tb_annonce(marque, modele, annee, kilometrage, prix) value(?,?,?,?,?) ", [marque,modele,annee,kilometrage,prix], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Record added successfully' });
  });
});

/* DELETE API annonce */
router.delete('/api/delete', function (req, res) {
  let id = req.body.id;
  if (!id) {
      return res.status(400).send({ error: true, message: 'Please provide id' });
  }
  db.query('DELETE FROM tb_annonce WHERE id = ?', [id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'User Data has been deleted' });
  });
}); 

/* PUT API update annonce */
router.put('/update', function (req, res) {
    let id = req.body.id;
    let marque = req.body.marque;
    let modele = req.body.modele;
    let annee = req.body.annee;
    let kilometrage = req.body.kilometrage;
    let prix = req.body.prix;
    let description = req.body.description;

    if (!id || !marque || !modele || !annee || !kilometrage || !prix || !description) {
        return res.status(400).send({ error: user, message: 'Please provide full information with id' });
    }
    db.query("UPDATE tb_annonce SET marque = ?, modele = ?, annee = ?, kilometrage = ?, prix = ?, description = ? WHERE id = ?", [marque, modele, annee, kilometrage, prix, description, id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Updated successfully' });
    });
});

module.exports = router;
