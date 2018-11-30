var Personne =
{
  nom: "",
  prenom: "",
  age:21,
  taille: 175,

  init: function(nom, prenom, age, taille)
  {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.taille = taille;
  },

  decrire: function()
  {
    console.log(`Je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans et et je mesure ${this.taille} cm.`);
  },
}

var Professeur = Object.create(Personne);
Professeur.email = "prof@school.com";

Professeur.initProfesseur = function(nom, prenom, age, taille, email)
{
  this.init(nom, prenom, age, taille);
  this.email = email;
};

Professeur.decrire = function()
{
  console.log(`Je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans et je mesure ${this.taille} cm. Mon email est : ${this.email}.`);
};

var prof = Object.create(Professeur);
prof.initProfesseur("Jean", "Pierre", 55, 190, "jean.pierre@u-bordeaux.fr");
jack.decrire();
