const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const annonceController = require('../controllers/annonceController.js');
const usersController = require('../controllers/usersController.js');
const annonceControllersApi = require ('../controllers/annonceControllersApi.js');
const userControllerApi = require ('../controllers/userControllerApi');



// ROUTES annonces

router.get('/', annonceController.mainrender);

router.get('/annonce/add', annonceController.annonceAdd);

router.post('/annonce/save', annonceController.annonceUpdate);

router.get('/skin/edit/:id', annonceController.annonceEdit);

router.post('/skin/update', annonceController.updateSkin);

router.get('/skin/delete/:userId', annonceController.SkinDelete);

router.get('/skin/get/:userId', annonceController.SkinGet);

// API ROUTES SKIN

router.get('/api/skin', skinControllerApi.api); //ok

router.post('/api/skin', skinControllerApi.SkinSaveApi); //ok

router.put('/api/skin', skinControllerApi.updateSkinApi); //ok

router.get('/api/skin/:userId', skinControllerApi.SkinEditApi); //ok

router.delete('/api/skin/:userId', skinControllerApi.SkinDeleteApi); //ok

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