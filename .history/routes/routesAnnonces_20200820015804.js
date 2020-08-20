const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const annonceControllers = require('../controllers/annonceController.js');
const usersController = require('../controllers/usersController.js');
const annonceControllersApi = require ('../controllers/annonceControllersApi.js');
const userControllerApi = require ('../controllers/userControllerApi');



// ROUTES annonces

router.get('/', annonceControllers.mainrender);

router.get('/annonce/add', annonceControllers.annonceAdd);

router.post('/annonce/save', annonceControllers.annonceUpdate);

router.get('/annonce/edit/:id', annonceControllers.annonceEdit);

router.post('/annonce/update', annonceControllers.annonceUpdate);

router.get('/annonce/delete/:id', annonceControllers.annonceDelete);

router.get('/annonce/get/:id', annonceControllers.annonce);

// API ROUTES annonces

router.get('/api/annonces/all', annonceControllersApi.apiAnnoncesAll); 

router.post('/api/annonce/add', annonceControllersApi.apiAnnonceAdd); 

router.put('/api/annonce/update', annonceControllersApi.apiAnnonceUpdate); 

router.get('/api/annonce/:id', annonceControllersApi.apiAnnonce); 

router.delete('/api/annonce/delete/:id', annonceControllersApi.apiAnnonceDelete); 


module.exports = router;