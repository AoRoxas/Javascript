
do{
    nombre1 = parseInt(window.prompt("Choississez votre premier nombre"));
    nombre2 = parseInt(window.prompt("Choississez votre deuxième nombre"));
 }while (isNaN(nombre1) == Number);
 while (isNaN (nombre2) == Number);

try {
    let operation = prompt('Choissez votre opération : addition - soustraction - multiplication - division');
    let resultat;

    switch (operation) {
        case 'addition':
            resultat = nombre1 + nombre2
            break;
        case 'soustraction' : 
        resultat = nombre1 - nombre2
            break;
        case 'multiplication' :
            resultat = nombre1 * nombre2
            break;
        case 'division' : 
        resultat = nombre1 / nombre2
            break;
        default :
            throw new Error('Veillez entrer une opération');
    }
    alert(`Votre résultat est : ${resultat}`);
} catch (e) {
    alert(e);
}
