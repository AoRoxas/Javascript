let age = prompt ("Quel est votre âge ?")

function start(){
    let div = document.getElementById('container');                 
    let p = div.innerHTML(document.createElement("p"));
    p.innerHTML(document.createTextNode(`Votre âge est ${age}ans`));
    
}


if (age >= 16 && age <= 18){
    document.write("Vous pouvez conduire une voiture aux USA !")
} else if (age <18){
    document.write("Vous êtes mineur !")
} else if (age >= 18 && age <= 20){
    document.write("Vous êtes majeur en Europe !")
} else if (age > 20){
    document.write("Vous pouvez consommer de l'aclool !")
}