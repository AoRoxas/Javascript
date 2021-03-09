let nom = prompt ("Quel votre nom ?");
let prenom = prompt("Quel est votre prénom ?");
let age = prompt("Quel est votre âge ?")
let adresse = prompt ("Quel est votre adresse ?");
let cp = prompt ("Quel est votre code postal ?");
let ville = prompt ("Quel est votre ville ?");
let taille = prompt ("Quel est votre taille (en mètre Ex : 1.70) ?");
let poids = prompt ("Quel est votre poids (en Kg) ?");
let resultat = Math.round (poids / taille**2)


function start(){
    let div = document.getElementById('container');                 
    let p = div.appendChild(document.createElement("p"));
    p.appendChild(document.createTextNode(`Nom : ${nom} • Prénom : ${prenom} •
    Age : ${age} • Adresse : ${adresse} • Code Postal : ${cp} • Ville : ${ville} •
    Taille : ${taille}m • Poids : ${poids}Kg • IMC : ${resultat}`));
}







// document.write(`Nom : ${nom}`);
// document.write(`Prénom :  ${prenom}`);
// document.write(`Adresse : ${adresse}`);
// document.write(`Code Postal : ${cp}`);
// document.write(`Ville :  ${ville}`);
// document.write(`Taille :  ${taille}m`);
// document.write(`Poids : ${poids}`);
// document.write(`IMC : ${resultat}`);

    
