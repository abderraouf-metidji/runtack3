$(document).ready(function() {
    const afficherBouton = $("#afficher-bouton");
    const texte = $("#mon-texte");
    const cacherBouton = $("#cacher-bouton");
  
    afficherBouton.click(function() {
      texte.text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");
    });
  
    cacherBouton.click(function() {
      texte.hide();
    });
  });
  