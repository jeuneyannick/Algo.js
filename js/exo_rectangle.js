// cible le bouton afficher/cacher
var bouton = document.getElementById('toggle-rectangle');

//cible le rectangle dans le doc
var rectangle = document.querySelector('.rectangle');

/*
2- FONCTIONS
*/

/*
a- fonction au click sur le bouton
*/
// la méthode ou la focntion .toggle() va ajouter ou supprimer la class CSS (comme un interrupteur)
 function surClickBouton (){
     rectangle.classList.toggle('hide');// correspond à .hide en css qui a la propriété display: none;
 }
bouton.addEventListener('click', surClickBouton);

function auSurvolRectangle (){
    rectangle.classList.add('important')

}
rectangle.addEventListener('mouseover', auSurvolRectangle);

function aSortieRectangle () {
    rectangle.classList.remove('important');
    rectangle.classList.remove('good');
}
    rectangle.addEventListener('mouseout', aSortieRectangle);
function doubleClick () {
    rectangle.classList.toggle('good');
}
rectangle.addEventListener('dblclick', doubleClick)

window.onload = function compris (){
    alert('jai compris Javascript');
}
/*
3-ECOUTEUR D'EVENEMENTS

l'écouteur d'evenemnt prend deux paramètres, (paramètre_1, paramètre_2)
en 1er =>l'evenement
en 2nd =>la fonction à exécuter à cet evenement

-a installe un gestionnaire d'evenements au clique sur le bouton ciblé dans ma variable BUTTON
bouton.addEventListener('click, surClickBouton')
*/
