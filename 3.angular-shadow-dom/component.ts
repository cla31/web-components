//Partie 3

// Angular n'utilise pas les m^mes standards vus dans la pertie précédente
//car ces standards ne sont pas encore bien supportés par tous les navigateurs.
// Du coup équipe google ont dev un meilleur fonctionnement
//Mais avec un même support
//3 stratégies possibles pour encapsuler nos éléments personnalisés:
// 1ère = Système qui simule le dom de l'ombre dev par google (meilleur support poue les navagateurs)
//encapsulation: ViewEncapsulation.emulated,
//2ème = comme la session précédente
//Donc là on utilise pas le système interne mais le standard natif
//encapsulation: ViewEncapsulation.Native,
//3ème, si n'y l'une n'y l'autre
//Là on dit qu'on ne veut pas encapsuler ce composant, donc vaut mieux ne pas le faire...
//encapsulation: ViewEncapsulation.None,


import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector:'some-component',
    templateUrl:'<p>Un composant</p>',
    encapsulation: ViewEncapsulation.emulated,
})
export class AppComponent ()