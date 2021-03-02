function afficherDate() {
    const d = new Date();
    document.write("Nous sommes le " + d.getDate() + "/" + (d.getMonth() + 1 ) + "/" + d.getFullYear());
}


function date(){
   let div = document.getElementById("date");
   d=new Date();
   div.innerHTML = "Nous sommes le " + d.getDate() + "/" + (d.getMonth() + 1 ) + "/" + d.getFullYear()
}

function start(){
    let section = document.getElementById('welcome');
    d=new Date();                 
    let p = section.appendChild(document.createElement("p"));
    p.appendChild(document.createTextNode("Nous sommes le " + d.getDate() + "/" + (d.getMonth() + 1 ) + "/" + d.getFullYear()))
}
