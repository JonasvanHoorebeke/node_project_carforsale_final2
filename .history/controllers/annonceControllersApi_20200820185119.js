const mysqlConnection = require("../connection.js");
let Annonces = require('../models/userModels.js');

exports.apiAnnoncesAll = function (req, res) {
    let sql = "SELECT * FROM annonce INNER JOIN categorie WHERE annonce.idcategorie = categorie.idcategorie";
    let query = mysqlConnection.query(sql, (err, rows) => {
        if(err) {
            res.status(400).json({'message':error});
        }
        else{
        res.status(200).json({
            title :'Annonces demandées',
            annonces : rows

        })
        }
    });
};


exports.apiAnnonceUpdate = function (req, res) {
    let annonce = new Annonce( req.body.idannonce, req.body.marque, req.body.modele, req.body.annee, req.body.kilometrage, req.body.prix, req.body.description, req.body.photo, req.body.codepostal);
    console.log(annonce);
    mysqlConnection.query("UPDATE annonce SET marque='"+req.body.marque+"', modele='"+req.body.modele+"', annee='"+req.body.annee+"' where idannonce ="+req.body.idannonce,
        [annonce, req.body.idannonce], function (err, results) {
            if (err) {
                console.log(error);
                res.status(400).json({'message':error});
            } else {
                res.status(202).json({ 'message':'success' });
            }
        })
};
exports.apiAnnonceAdd = function (req, res) {
    let annonce = new Annonce(req.body.idannonce, req.body.marque, req.body.modele, req.body.annee, req.body.kilometrage, req.body.prix, req.body.description, req.body.photo, req.body.codepostal, req.body.idcategorie);
    console.log(annonce);
    mysqlConnection.query("INSERT INTO annonce SET?", 
        annonce, function (err, results) {
            if (err) {
                res.status(400).json({'message':'error'});
            } else {
                res.status(200).json({ 'message':'success' });
            }
        });
    };


exports.apiAnnonceDelete = function (req, res) {
    const id = req.params.id;
    let sql = `DELETE from annonce WHERE idannonce = ${id}`; 
    let query = mysqlConnection.query(sql,(err, result)=>{
        if(err) {
            res.status(400).json({'message':error});
        }
        else{
            res.status(200).json({ 'message':'success' })
        }
    });
};

exports.apiAnnonce = function (req, res) {
    const id = req.params.id;
    let sql = `SELECT * FROM annonce WHERE idannonce = ${id} `;
    let query = mysqlConnection.query(sql,(err, rows)=>{
        if(err) {        
            res.status(400).json({'message':error});
        }
        else{
            res.status(200).json({
                title :'Annonce demandée',
                annonces : rows
            })
        }
    });
};


