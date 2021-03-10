let depart = "Bruxelles-Midi";
let arrivee = prompt ("Votre destination") || "Mons";
let chauffeur = "Claude";

if (depart == "" || arrivee == "" || chauffeur == "") {
     document.write("Non valide")
    
} else {
    document.write("Votre train part à 10h")
}