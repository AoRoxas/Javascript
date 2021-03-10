let nom = "";
let prenom = "";

while (nom == "" || nom == null || prenom =="" || prenom == null) {
    nom = prompt ("Quel votre nom ?")
    prenom = prompt("Quel est votre prénom ?")
}

document.write(`Vous vous appelez ${nom} ${prenom} !`)


console.log("J'ai fini");