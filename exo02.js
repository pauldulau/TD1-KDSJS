function Etudiant(nom, prenom, numEtu, dateNais)
{
  this.nom = nom;
  this.prenom = prenom;
  this.numEtu = numEtu;
  this.age = age;

  this.presenter = function()
  {
    console.log(`Je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans et mon numéro étudiant est ${this.numEtu}.`);
  };
};

var paul = new Etudiant("Dulau", "Paul", 216602, 21);
