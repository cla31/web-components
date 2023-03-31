//Partie 2 video 1 https://www.youtube.com/watch?v=Iuafu7f01yE&list=PLhVogk7htzNgctPG3iB5PHx8_28BNQeSd

// Voici un script capable de créer un vrai élément personnalisé
// qui respecte les standars des web components



// On crée un prototype pour notre élément personnalisé
var superHerosPrototype = Object.create(HTMLElement.prototype)

// On va en profiter pour utiliser les callbacks de cycle de vie
// Et on rajoute un template à notre composant 
//( code à exécuter lors de la création de notre prototype)
superHerosPrototype.createdCallBack = function() {
    this.innerHTML = '<h1>Superman</h1>'
}

// On crée notre élément personnalisé avec document.registerElement
var superHerosElement = document.registerElement('super-heros', {
    prototype: superHerosPrototype
});

//On peut ensuite utiliser notre élément simplement
document.body.appendChild(new superHerosElement());