let operation, n1, n2, resultat;

function calculatrice(){
    // Demande l'opération
    do{
        operation = prompt(`Choississez votre opération\n
        1) Addition\n
        2) Soustraction\n
        3) Multiplication\n
        4) Division\n`);
    } while (operation != '1' && operation != '2' && operation != '3' && operation != '4');
    do{
        // demande le premier nombre
        n1 = parseInt(prompt('Entrez le premier nombre'))
    }while (isNaN(n1));
    
    //alert(`le nombre est  ${n1}`)
    
    do{
        // demande le deuxième nombre
        n2 = parseInt(prompt('Entrez le deuxième nombre'))
    }while (isNaN(n2));
    
    //alert(`le nombre est  ${n2}`)
    
    calcul(n1,n2)

}

calculatrice();

//Fonctions gérant les opérations
function addition(nombre1, nombre2){
    return nombre1 + nombre2;
}



function soustraction(nombre1, nombre2){
    return nombre1 - nombre2;
}



function multiplication(nombre1, nombre2){
    return nombre1 * nombre2;
}

function division(nombre1, nombre2){
    if(nombre2 == 0){
        alert('Attention, la division par zéro est impossible. Veillez entrer de nouvelles valeurs.');
        calculatrice()
    } else{
        return nombre1 / nombre2;
    }
}

function calcul(nombreN1, nombreN2){
    try{
        switch(operation){
            case '1' :
                alert(`${nombreN1} + ${nombreN2} = ${addition(nombreN1, nombreN2)}`);
                break;
            case '2' :
                alert(`${nombreN1} - ${nombreN2} = ${soustraction(nombreN1, nombreN2)}`);
                break;
            case '3' :
                alert(`${nombreN1} x ${nombreN2} = ${multiplication(nombreN1, nombreN2)}`);
                break;
            case '4' :
                alert(`${nombreN1} : ${nombreN2} = ${division(nombreN1, nombreN2)}`);
                break;
            default:
                throw new Error(`Une erreur est sur survenue. On relance !`);
        }

    } catch(e){
        alert(e);
        calculatrice();
    } finally{
        if(confirm('Effectuez une nouvelle opération ?')){
            calculatrice();
        } else {
            alert('Au revoir');
        }
    }

}

