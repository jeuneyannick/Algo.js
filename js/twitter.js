//alert ("test");
/*1 - cibler l'élément textarea et l'id #counterBlock */
/*2- je crée ma fonction qui :       */
//=> calcule la longueur de la chaine de caractères contenue
//dans le textarea
//=> affiche cette valeur dans la balise #counterBlock grâce à innerHTML
//=> Si le nombre de caractères descend sous 0 on ajoute la class red à #counterBlock =, SINON
//=>on l'enlève

/* 3- écouteur d'évenement KEYUP sur le textarea
=>on déclenche la fonction quand on tape au clavier et au chargement de la page
*/





var textarea = document.getElementById('tweetContent');
var blockCount = document.getElementById('counterBlock')

function count(){
    var count = 140 - textarea.value.length;
    blockCount.innerHTML = count;

    if (count < 0){
        blockCount.classList.add("red");
    } else if (count >= 0) {
        blockCount.classList.remove("red");
    }

}
textarea.addEventListener('keyup',count);
count();
