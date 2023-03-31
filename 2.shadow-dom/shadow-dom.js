//Vidéo 2
//Pour créer un nouveau DOM qui n'est pas rattaché au DOM principal (le DOM de la page globale)
// On peut créer plusieurs DOM de l'ombre dans une même oage web
// En pratique on créé un Dom de l'ombre
//pour chaque élément personnalisé
// il doit toujours être rattaché à un élément existant
//que ce soit une balise html ou un élément créé depuis un script

/**************** 
 * HTML *
 **************** /
<p id="paragraphe-shadow"></p> */


// **************** 
//  * JavaScript *
//  ****************

// La méthode createShadowRoot permet d'instancier un nouveau
// Shadow Dom et ne prend aucun paramètre

var shadow = document.querySelector('#paragraphe-shadow').createShadowRoot();

// Pour l'instant notre Shadow Dom est vide,
// mais nous pouvons lui ajouter du contenu

shadow.innerHTML = "<p id='shadow'>Salut, Shadow DOM!</p>"

// Si on cherche notre contenu caché depuis la console du navigateur, 
// alors la commande précédente ne retourne rien,
// car le DOM n'a pas accès au shadow DOM!
document.querySelectorAll('paragraphe-shadow')