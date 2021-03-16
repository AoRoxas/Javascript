
do{
    nombre1 = parseInt(window.prompt("Choississez votre premier nombre"));
    nombre2 = parseInt(window.prompt("Choississez votre deuxième nombre"));
}
while (isNaN(nombre1) == Number);
while (isNaN (nombre2) == Number);

    if (nombre1 || nombre2 !== Number) {
       alert = ("Veillez entrer des nombres !")
       
    };

    
try {
    let operation = prompt('Choissez votre opération :\r 1. Addition \r 2. Soustraction \r 3. Multiplication \r 4. Division');
    let resultat;

    switch (operation) {
        case '1':
            resultat = nombre1 + nombre2
            break;
        case '2' : 
        resultat = nombre1 - nombre2
            break;
        case '3' :
            resultat = nombre1 * nombre2
            break;
        case '4' : 
        resultat = nombre1 / nombre2
            break;
        default :
            throw new Error('Veillez entrer une opération');
    }
    alert(`Votre résultat est : ${resultat}`);
} catch (e) {
    alert(e);
}
