
let mysqlConnection = require('../connection');
let Annonce = require('../models/userModels');

/* GET home page. */
exports.mainrender = function (req, res) {
  let sql = "SELECT * FROM annonce INNER JOIN categorie ON categorie.idcategorie = annonce.idcategorie";
  let query = mysqlConnection.query(sql, (err, rows) => {
      if(req.session.isadm === 'Admin')
      res.render('admin.ejs', {
          title : 'Skins Farmerzzzzzzzz',
          skins : rows
      });
      else{
      res.render('user_index.ejs', {
          title :'Skins TEST',
          skins : rows

      })
      }
  });
};

/* GET form for new annonce */
exports.annonceNew = function (req, res) {
  res.render('annonce_add', {
      title : "Vendre un véhicule"
  });
};

  /* POST form for new annonce */
  exports.annonceAdd = function (req, res) {
  let skin = new Annonce(req.body.idannonce, req.body.marque, req.body.modele, req.body.annee, req.body.kilometrage, req.body.prix, req.body.description, req.body.photo, req.body.codepostal, req.body.idcategorie);
  console.log(annonce);
  mysqlConnection.query("INSERT INTO annonce SET?", 
      annonce, function (err, results) {
          if (err) {
              res.status(400).send(error);
          } else {
              res.status(200).redirect('/');
          }
      });
  };

  /* GET update annonce */
  exports.annonceUpdate = function (req, res) {
  let annonce = new Annonce(req.body.idannonce, req.body.marque, req.body.modele, req.body.annee, req.body.kilometrage, req.body.prix, req.body.description, req.body.photo, req.body.codepostal);
  console.log(skin);
  mysqlConnection.query("UPDATE annonce SET name='"+req.body.name+"', jeu='"+req.body.jeu+"', prix='"+req.body.prix+"' where id ="+req.body.id,
      [skin, req.body.id], function (err, results) {
          if (err) {
              console.log(error);
              res.status(400).send(error);
          } else {
              res.status(202).redirect('/');
          }
      })
};

  /* POST update annonce */
exports.SkinEdit = function (req, res) {
  const userId = req.params.userId;
  let sql = `SELECT * FROM skins WHERE id = ${userId} `; // id = nom clé primaire dans la bd, userId est lié au server
  let query = mysqlConnection.query(sql,(err, result)=>{
      if(err) throw err;
      res.render('skin_edit',{
          title : 'Skins Farmez',
          user : result[0]
      });
  });
};

//POUR DELETE UN SKIN 
exports.SkinDelete = function (req, res) {
  const userId = req.params.userId;
  let sql = `DELETE from skins WHERE id = ${userId}`; // id = nom clé primaire dans la bd, userId est lié au server
  let query = mysqlConnection.query(sql,(err, result)=>{
      if(err) throw err;
      res.redirect('/');
  });
};

//POUR AFFICHER LA PAGE D'UN SKIN
exports.SkinGet = function (req, res) {
  const userId = req.params.userId;
  let sql = `Select * from skins WHERE id = ${userId}`; // id = nom clé primaire dans la bd, userId est lié au server
  let query = mysqlConnection.query(sql,(err, result)=>{
      if(err) throw err;
      res.render('skin_page',{
          title : 'Skins Farmez',
          user : result[0]
      });
  });
};





/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Cars for Sale' });
  });
  
  /* GET test connection. */
  router.get('/testconnect', function(req, res, next){
    if (db != null) {
      res.send('La connexion est établie');
    } else {
      res.send('Échec de la tentative de connexion'); 
    }
  });
  
  /* GET generate list of annonces */
  router.get('/acheter', function(req, res, next){
    db.query('SELECT * FROM tb_annonce', function(err, rs) {
      res.render('select', {acheter: rs}); // res.render = génère un modèle de vue
    });
  });
  
  /* GET generate specific annonce */
   router.get('/detail', function(req, res, next){
    db.query('SELECT FROM tb_annonce WHERE id = ?', function(err, rs) {
      res.render('detail', {detail: rs}); // res.render = génère un modèle de vue
    });
  });
  
  /* GET form for new annonce */
  router.get('/form', function(req, res, next){
    res.render('form', { acheter: {} });
  });
  
  /* POST form for new annonce */
  router.post('/form', function(req, res, next){
    db.query('INSERT INTO tb_annonce SET ?', req.body, function(err, rs){
      res.render('new');
    })
  })
  
  /* GET delete annonce */
  router.get('/delete', function(req, res, next) {
    db.query('DELETE FROM tb_annonce WHERE id = ?', req.query.id, function(err, rs) {
      res.redirect('/acheter');
    })
  });
  
  /* GET update annonce */
  router.get('/edit', function(req, res, next) {
    db.query('SELECT * FROM tb_annonce WHERE id = ?', req.query.id, function(err, rs){
      res.render('form', {acheter: rs[0]});
    })
  });
  
  /* POST update annonce */
  router.post('/edit', function(req, res, next) {
    var param =  [
      req.body,       // data for query
      req.query.id    // condition for update
    ]
    db.query('UPDATE tb_annonce SET ? WHERE id = ?', param, function(err, rs) {
      res.redirect('/acheter');    // go to page select
    })
  })