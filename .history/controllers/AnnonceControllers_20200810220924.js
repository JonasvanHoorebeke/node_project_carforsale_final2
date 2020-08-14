
let mysqlConnection = require('../connection.js');
let connection = require('../db');
let userList = [];





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