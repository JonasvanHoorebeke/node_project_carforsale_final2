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

// API ROUTES SKIN

router.get('/api/annonces/all', annonceControllersApi.apiAnnoncesAll); //ok

router.post('/api/annonce/add', annonceControllersApi.apiAnnonceAdd); //ok

router.put('/api/annonce/update', annonceControllersApi.apiAnnonceUpdate); //ok

router.get('/api/annonce/:id', annonceControllersApi.apiAnnonce); //ok

router.delete('/api/annonce/delete/:id', annonceControllersApi.apiAnnonceDelete); //ok

// PANIER ROUTES SESSION

router.get('/cart/:id', cartController.cartId);

router.get('/cart', cartController.cart);

router.get('/removeCart/:id', cartController.RemoveCart);

//LOGIN ROUTES

router.get('/signup/now', loginController.signupNow);

router.post('/signup', loginController.signup); 

router.get('/login/now', loginController.loginNow);

router.post('/login', loginController.login); // pq post ??

router.get('/profil', loginController.profil);

router.get('/logout', loginController.logout);

router.get('/profil/update/:userId', loginController.profilUpdate);

router.post('/profil/update/', loginController.updateProfil);

//LOGIN API ROUTES


router.post('/api/signup', loginControllerApi.signup); //ok

router.get('/api/login', loginControllerApi.login); //ok 

router.get('/api/profil/update/:userId', loginControllerApi.profilUpdate); //ok

router.put('/api/profil/update/', loginControllerApi.updateProfil); //ok

//AUTRES ROUTES

router.get('/infoleg', footerController.infoleg);


  
module.exports = router;