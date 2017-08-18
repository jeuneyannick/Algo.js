/*

VARIABLES
On selectionne les élements du DOM(page html) pour les stocker
dans des variables afin des les manipuler ensuite dans notre code
*/

var monBouton = document.getElementById('myButton');
var liste = document.getElementById('dropdown-list');


function afficher(){
    if(liste.style.display == 'block') {
        liste.style.display = 'none'
    } else {
        liste.style.display = 'block';
    }


}




/*
2-Evenement
*/
monBouton.addEventListener("click",afficher)
