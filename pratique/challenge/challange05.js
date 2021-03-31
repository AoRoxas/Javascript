document.querySelector('#a-supprimer').remove();

let header = document.createElement('header');
header.textContent = "Bienvenue";
document.body.append(header);

header.style.backgroundColor = "#e3b04b"
header.style.fontSize = "3rem"
header.style.color = "white"
header.style.fontFamily = "Tahoma"
header.style.textAlign = "center"
header.style.padding = "1rem"


let h5 = document.createElement('h5');
h5.innerHTML = '<p><a href="#">Accueil </a> /  <a href="#"> Une autre page</a></p>';
document.body.append(h5);

h5.style.fontSize = "1rem"
h5.style.color = "blue"
h5.style.backgroundColor = "#f1d6ab"
h5.style.padding = "1rem"
h5.style.textDecoration = "none"
h5.style.marginTop = "0"

let p = document.createElement('p');
p.textContent = "Ceci est un texte généré avec JavaScript !";
document.body.append(p);

p.style.fontFamily = "Tahoma"