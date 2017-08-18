var taille = prompt('Choisis le nombre d\'étages du sapin');


//on met les étages du sapin
for(var etage = 1; etage <= taille; etage++) {
    // 1-Pour chaque étage mon compteur est égal à +3
    for (var i=0; i < etage + 3; i++){
    //2 - pour chaque ligne j'ai =>((etage + ligne)*2)-1
    //étoile
    for(var nb_etoile = 1; nb_etoile <= ((etage + i)*2)-1;
        nb_etoile++){
            document.getElementById('sapin').innerHTML +='*';
        }
        document.getElementById('sapin').innerHTML += '<br>';

    }// fin lignes

}// fin étages


for(var pied = 1; pied<= taille; pied++) {
    document.getElementById('sapin').innerHTML +='|';
    document.getElementById('sapin').innerHTML += '<br>';
}
