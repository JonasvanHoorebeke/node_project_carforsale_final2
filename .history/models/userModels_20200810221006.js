
/*CLASSE NECESSAIRE A LA CONSTRUCTION D'UN PRODUIT (SKIN)
class Skin {
    constructor (id, name, prix, jeu, idcateg, idrare)
    {
        this.id = id;
        this.name = name;
        this.prix = prix;
        this.jeu = jeu;
        this.idcateg = idcateg;
        this.idrare = idrare;
        }
}

 module.exports = Skin; 
*/



 class Annonce {
    constructor(id, marque, modele, annee, kilometrage, prix, description)
    {
        this.id = id;
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.kilometrage = kilometrage;
        this.prix = prix;
        this.description = description;
    }
    
};

module.exports = Annonce;



/* DKP
class User {
    lastname ="";
    firstname = "";
    constructor(lastname, firstname)
    {
        this.lastname = lastname;
        this.firstname = firstname;
    }
    
};

module.exports = User; */