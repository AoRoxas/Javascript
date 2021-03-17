//demander à l'utilisateur d'introduire une chaîne de cacractère
//L'envoyer dans un tableau
//redemander s'il y a une autre donnée
//si user ok, on recommence
//sinon, on arrête et on affiche en console le contenu du tableau

//Déclarer un tableau
//pour envoyer la donnée dans le tableau tableau.push(donnée)
//console.log(tableau)

let tableau = []

function valeurs(){
    let donnee = prompt('Entrez une donnée');
    tableau.push(donnee)
    if (confirm('Entrer une nouvelle donnée ?')){
        valeurs()
    } else {
        console.log(tableau)
    }

}
valeurs();