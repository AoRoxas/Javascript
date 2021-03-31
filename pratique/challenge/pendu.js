function game(){
    

    //Je crée les variables du jeu
    let mots_5 = ["abime","acide","acier","aider","aieul","aigle","aimer","album","alger","algue","aller","amour","angle","annee","appel","apres","arabe","arbre","arche","arete","arret","assez","assis","astre","atoll","atome","autre","avant","avion","avoir","avril","bague","balai","balle","bande","barbe","barre","baton","baver","bebes","belle","betes","biere","bijou","bille","bisou","blanc","blond","boire","boite","bosse","botte","bouee","boule","bourg","bruit","buche","cache","cadre","calin","calme","canal","canne","canon","carre","carte","casse","champ","chaud","chene","chien","chier","chose","chute","clair","clown","colle","conte","corde","corps","coude","court","crabe","craie","creux","crier","croix","cruel","cuire","cygne","dames","danse","debut","degre","diner","doigt","douze","droit","drole","duree","echec","ecole","ecran","eleve","engin","envie","epais","epoux","etain","etang","etude","evier","faire","faner","farce","faute","femme","ferme","fesse","filet","fille","finir","fleur","foire","fonce","force","foret","forme","frein","frere","frite","froid","front","fruit","fumee","fumer","fusee","fusil","futur","garer","geant","geler","gener","genie","genou","glace","golfe","gomme","gorge","grain","grand","grele","guepe","gueri","habit","hache","herbe","heure","hibou","hindi","hiver","homme","hotel","huile","image","islam","jambe","jaune","jeter","jeudi","jeune","jouer","jouet","jours","lacer","lacet","laine","lampe","lapin","large","larme","laser","latin","laver","leger","lepre","lever","ligne","linge","lisse","liste","litre","livre","loupe","lourd","lundi","lutin","macon","magie","mains","maman","mardi","marie","marin","masse","matin","melon","merde","metal","metre","micro","mieux","mille","mince","mixer","moins","monde","moule","moyen","nager","nappe","navet","neige","neveu","niece","noyau","nuage","obeir","objet","ocean","odeur","œuvre","ombre","oncle","ongle","orage","ordre","outil","paire","panda","panne","passe","pates","patte","payer","peche","pelle","penis","pente","perle","peser","petit","photo","pieds","place","plage","plein","plier","pluie","plume","poche","poele","poids","poing","point","poire","pomme","pompe","poney","porte","poser","poste","pouce","poule","preau","prune","punir","puree","quand","queue","radio","radis","ramer","rampe","raper","raser","rater","rayon","reine","repas","rever","riche","roche","rouge","route","ruban","rugby","russe","sable","salir","salle","sante","sapin","savon","seize","serre","siege","signe","silex","singe","soupe","sourd","sport","stylo","sucer","sucre","suite","tabac","table","tache","taire","talon","tante","taper","tapis","tarte","tasse","tater","taupe","temps","tenir","tente","terre","teter","tigre","tirer","tissu","titre","tonne","tordu","train","trait","trier","trois","troll","trous","tuyau","unite","usine","utile","vache","vagin","vague","venir","verre","veste","veuve","vider","vieux","ville","vingt","vitre","vivre","voile","voler","volet","vulve","wagon","zebre"];
    let mots_6 = ["absent","acteur","action","adroit","adulte","agacer","agiter","agneau","alcool","amener","amuser","ananas","ancien","animal","anorak","argent","autant","auteur","autour","autrui","avaler","avance","avoine","bagage","baiser","balcon","ballon","banane","barque","barrer","bassin","batard","bateau","battre","bavoir","bercer","betail","betise","beurre","billet","bonbon","bondir","bonnet","bosser","bottes","bouche","bouder","bouger","bouton","bronze","brosse","bruler","bulles","bureau","cabane","cacher","cadeau","cahier","caisse","calcul","camion","camper","canape","canard","cancer","canyon","carnet","cartes","carton","casier","casque","casser","cecite","centre","cercle","cerise","chaine","chaise","chance","chemin","cheval","cheveu","chevre","chiant","chimie","cinema","cirque","citron","classe","cloche","cochon","coffre","cogner","colere","coller","comete","contre","copain","copier","coquet","coquin","corail","coreen","couche","coudre","couper","courir","course","cousin","couter","couver","crayon","creche","crepes","croute","cuisse","cuivre","danger","danser","debout","dedans","dehors","demain","depart","desert","dessin","dessus","devant","devoir","dindon","doigts","domino","donner","dormir","douche","dragon","droite","droits","echecs","eclair","ecorce","ecrire","effort","eglise","elever","emploi","encore","encule","endive","enerve","enfant","enorme","entier","entree","entrer","envers","epaule","eponge","epouse","equipe","espace","esprit","etaler","etoile","etroit","europe","facher","facile","famine","farine","fermer","feutre","fievre","figure","flamme","flaque","fleche","fleuve","flocon","fourmi","fraise","frange","gagner","garage","garcon","garder","gateau","gauche","gendre","geneve","gentil","geyser","girafe","glacon","gourde","gouter","goutte","graine","gramme","granit","griffe","grotte","groupe","guerir","guerre","hameau","hanche","humain","humeur","humide","hurler","imiter","intrus","isthme","jaloux","jamais","jambes","jambon","jardin","joyeux","jumeau","jungle","lacher","lagune","laisse","laiton","lancer","langue","lavabo","lecher","legume","lettre","levier","levres","lezard","louche","madame","maigre","maison","maitre","malade","mamans","manche","manege","manger","marais","marche","mariee","marier","marron","masque","menage","menton","metier","mettre","meuble","milieu","minuit","minute","modele","moitie","moment","monter","montre","moquer","morale","mordre","moteur","mouche","moufle","moulin","mourir","mousse","mouton","muguet","muscle","naitre","navire","neiger","nombre","numero","offrir","oignon","oiseau","orange","orteil","ourdou","ouvrir","paille","palais","panier","papier","paquet","pardon","pareil","parent","parfum","parler","partie","partir","passer","pattes","pedale","peigne","penser","percer","perdre","persil","phoque","photon","pierre","pigeon","pilote","pincer","piquer","piqure","plaine","plaire","plante","platre","pliage","poesie","pointe","pointu","poison","police","porter","poster","potage","poulet","poulie","poumon","poupee","poutre","prenom","preter","preuve","prince","prises","priver","propre","proton","putain","puzzle","pyjama","quartz","quatre","quinze","raisin","raison","ramper","rangee","ranger","rapide","rasoir","rateau","rayure","regard","remuer","renard","rendre","requin","rester","retard","retour","reveil","revoir","rideau","rivage","rocher","ronger","rouler","saison","salade","salive","saluer","samedi","sauter","sauver","savoir","secher","sentir","serrer","servir","sieste","sirene","soldat","soleil","solide","sombre","sommet","sonner","sortie","sortir","souple","souris","sphynx","square","suivre","taille","tampon","tendre","tennis","ticket","timbre","tiroir","tomate","tomber","tortue","traire","treize","trente","tresor","tricot","triste","trouer","tulipe","tunnel","utopie","valise","vallee","vendre","venter","ventre","verbes","verite","verser","viande","violet","virage","visage","vivant","voisin","volcan","volume","voyage","yaourt","zigzag","zombie"];
    let mots_7 = ["abeille","abricot","abriter","acheter","adresse","affaire","affiche","afrique","ajouter","algebre","aliment","alliage","allumer","ampoule","amusant","analyse","ancetre","anglais","animaux","appeler","appetit","appuyer","armoire","arreter","arriere","arriver","arroser","article","asseoir","associe","astraux","automne","avancer","bagarre","baigner","bailler","baisser","balayer","baleine","barrage","barreau","bassine","bengali","biberon","bientot","bifteck","biscuit","bizarre","blesser","blottir","boisson","boucher","bouchon","bouquet","branche","briller","buisson","cabinet","cadenas","cagoule","caillou","caliner","caprice","caresse","carotte","carreau","cederom","celibat","cerceau","cereale","cerveau","chaises","chaleur","chambre","chameau","changer","chanson","chanter","chapeau","charger","chariot","chasser","chateau","chemise","chiffon","chiffre","chimere","chinois","choisir","cholera","cigogne","ciseaux","clocher","cocotte","coffret","coiffer","collant","collier","colline","combien","comment","compose","compter","connard","content","corbeau","coucher","couette","couleur","couloir","cousine","coussin","couteau","couvert","couvrir","cracher","crapaud","cravate","creuser","crochet","croiser","croquer","cuisine","culotte","curieux","cuvette","dauphin","decorer","defiler","demolir","dernier","dessert","dessous","detroit","diamant","dinette","divorce","docteur","dossier","doucher","drapeau","ecarter","echarpe","echasse","echelle","eclater","eclipse","ecouter","ecraser","effacer","effraye","egalite","element","emmener","endroit","energie","enfiler","enlever","ennuyer","envoler","envoyer","epingle","essayer","essence","essuyer","estomac","etagere","ethique","etudier","excuser","facteur","falaise","falloir","famille","fantome","fatigue","fenetre","fermier","feuille","fevrier","ficelle","flotter","frapper","fratrie","fromage","frotter","galaxie","galette","galoper","gardien","gentile","glacier","glisser","gobelet","gonfler","goudron","gouffre","gouttes","graines","grandir","gratter","gravite","griffer","griller","grimace","grimper","gronder","guetter","habiter","hamster","haricot","hauteur","hesiter","heureux","hopital","horloge","iceberg","immense","inonder","insecte","inviter","italien","janvier","jongler","journee","juillet","justice","laisser","langues","largeur","lecture","lessive","lexique","liberte","licorne","liquide","logique","lumiere","machine","magasin","magenta","maillot","maladie","manquer","manteau","marcher","mariage","marteau","matelas","matiere","mauvais","mechant","medecin","mesurer","million","mineral","modeler","moineau","monnaie","montrer","morceau","moucher","mouette","mouille","musique","neutron","nombres","nonante","nourrir","nouveau","nuageux","obesite","obliger","occuper","oceanie","octante","octobre","optique","oreille","oublier","ouragan","ouvrier","panneau","parasol","parente","parking","passage","patient","paysage","pecheur","pedaler","peindre","peluche","pencher","pendant","pendule","penseur","percher","petrole","pinceau","piscine","placard","plafond","planche","planete","planter","plateau","pleurer","plonger","poignet","poireau","poisson","pompier","pousser","poussin","pouvoir","prairie","premier","prendre","present","presque","presser","profond","prudent","quitter","racisme","realite","recette","reciter","reculer","refuser","regaler","remplir","rentree","rentrer","reparer","repeter","reposer","reptile","reussir","revenir","riviere","robinet","ronfler","roulade","rouleau","rugueux","saigner","saisons","sardine","seconde","secouer","semaine","semelle","separer","serieux","serpent","serrure","sexisme","siffler","sifflet","silence","soigner","sommeil","sourcil","sourire","souvent","suivant","surdite","surface","tableau","tablier","tailler","tambour","tartine","tempete","terrain","terrier","theorie","torchon","tornade","toucher","tourner","tousser","trainer","tranche","travail","travaux","tremper","tricher","tromper","trousse","trouver","tsunami","univers","vampire","variole","vegetal","village","visiter","vitesse","voiture","volonte","vouloir","voyager"];
    let mots_8 = ["accident","acrobate","adjectif","adverbes","aeroport","africain","aiguille","allemand","allonger","alphabet","amerique","analogie","anarchie","anatomie","appareil","apporter","aquarium","araignee","archipel","arracher","arrosoir","assiette","atheisme","attacher","attendre","atterrir","attraper","bacterie","bagarrer","baguette","balancer","banlieue","banquise","barboter","barrette","baseball","beaucoup","biologie","bonhomme","bordeaux","bouillir","bourgeon","boutique","bracelet","bretelle","brouette","camarade","campagne","caniveau","caravane","caresser","cartable","cassette","ceinture","chanteur","chasseur","chauffer","chausser","chausson","cheminee","chenille","chercher","cheville","chimique","chocolat","chouette","coiffeur","colorier","compagne","comparer","conduire","connasse","consoler","consomme","coquille","couleurs","couronne","courrier","crevasse","crevette","cueillir","cuillere","cuisiner","cyclisme","deborder","decembre","dechirer","decoller","decouper","defendre","deguiser","dejeuner","demander","demarrer","dentiste","depasser","depecher","deranger","derriere","desobeir","desordre","dessinee","dessiner","detester","detruire","deuxieme","dimanche","discuter","disputer","distance","divorcee","douillet","echanger","echapper","echasses","eclairer","ecologie","ecorcher","ecriture","ecrivain","ecureuil","electron","elephant","eloigner","emmerder","empecher","emporter","enceinte","endormir","enfermer","enfoncer","ensemble","entendre","enterrer","entourer","eplucher","equation","escabeau","escalade","escalier","escargot","espagnol","eteindre","eternuer","europeen","explosif","fascisme","fauteuil","fontaine","football","fouiller","francais","geologie","gourmand","habiller","handball","herisson","histoire","identite","imaginer","immeuble","immobile","incendie","instable","internet","japonais","jardiner","journaux","judaisme","jugement","jumelles","kinshasa","longueur","lunettes","machoire","magazine","magicien","maladies","mammouth","mandarin","marchand","marecage","medecine","medicaux","meilleur","melanger","mensonge","mercredi","milliard","mineraux","molecule","monsieur","montagne","monument","mouchoir","mouiller","muraille","musicien","natation","nettoyer","noisette","novembre","oceanien","ordinaux","oreiller","orphelin","pantalon","panthere","papillon","parcours","partager","patauger","peinture","periodes","personne","petitami","physique","plaindre","pleuvoir","plombier","pluvieux","poitrine","policier","portiere","position","poubelle","pourquoi","preferer","preparer","promener","proteger","pullover","pyramide","quarante","quartier","quatorze","question","raconter","ramasser","rappeler","raquette","reaction","realisme","recevoir","recoudre","regarder","religion","remettre","repasser","repondre","respirer","retarder","rondelle","saladier","sanskrit","sciences","septante","soixante","sonnette","sorciere","souffler","souffrir","soulever","souvenir","surprise","synthese","tabouret","tagueule","terminer","terrible","toboggan","toilette","tonnerre","toujours","tracteur","traineau","trembler","triangle","tricoter","tricycle","trottoir","trounoir","uniforme","vacances","variable","vehicule","vendredi","vetement"];
    let mots_9 = ["abandonne","accoucher","accrocher","allumette","altruisme","aluminium","ambulance","americain","ascenseur","asiatique","asteroide","astronome","attention","avalanche","badminton","biochimie","botanique","boucherie","boulanger","bousculer","bouteille","bricolage","camescope","cantonais","cardinaux","carrefour","casquette","casserole","catalogue","cauchemar","changeant","chataigne","chaussure","chirurgie","chuchoter","cigarette","cimetiere","cinquante","cinquieme","clignoter","coloriage","commencer","compagnon","concombre","confiture","continent","continuer","contraire","coquetier","corbeille","couvercle","crocodile","dangereux","decoupage","degonfler","delicieux","demenager","descendre","dictature","different","difficile","dimension","dinosaure","directeur","doucement","elastique","embrasser","entonnoir","enveloppe","epluchure","equilibre","escalader","esclavage","esperanto","etiquette","existence","expliquer","exterieur","fabriquer","feminisme","fleuriste","framboise","geometrie","grammaire","grignoter","guirlande","handicape","humanisme","important","infirmier","installer","interieur","intestins","inventeur","jonquille","kangourou","maitresse","maladroit","mammifere","maquiller","marseille","mecanique","monarchie","moustache","moustique","mouvement","nucleaire","orchestre","paludisme","pansement","parapluie","patissier","perroquet","personnes","pharmacie","plastique","plongeoir","politique","portugais","poussette","poussiere","princesse","printemps","promenade","promettre","propriete","quatrieme","questions","radiateur","remercier","remplacer","renverser","retourner","retrouver","reveiller","satellite","sculpture","septembre","serviette","shampoing","souhaiter","souligner","spectacle","squelette","telephone","telescope","tournevis","traverser","troisieme","trompette","vaisselle","xylophone",""];
    let mots_10 = ["acoustique","adolescent","aspirateur","astronomie","athletisme","automobile","avortement","backgammon","balancoire","barbouille","bicyclette","biographie","bouddhisme","brouillard","calendrier","champignon","chaussette","citrouille","clementine","coccinelle","communisme","comprendre","conscience","construire","coquelicot","coquillage","couverture","crocodiles","cuisiniere","definition","democratie","dentifrice","difference","diplomatie","directrice","distribuer","dysenterie","electrique","enseignant","esthetique","fairechier","filsdepute","fourchette","geographie","grenouille","hindouisme","hirondelle","impossible","indonesien","infirmiere","inondation","instrument","inventions","invitation","magnetisme","maintenant","maquillage","marguerite","maternelle","mecanicien","medicament","nourriture","oligarchie","ordinateur","ordonnance","pantheisme","paquerette","passerelle","patisserie","periodique","peripherie","petiteamie","pharmacien","phenomenes","politicien","poursuivre","profession","profondeur","rapidement","rechauffer","recreation","relativite","rencontrer","republique","ressembler","restaurant","revolution","rhinoceros","semantique","socialisme","strasbourg","surveiller","syllogisme","telephoner","television","trampoline","tranquille","transpirer","travailler","vietnamien","voielactee"];
    let choix;
    let mot = "";
    let tableauLettre = [];
    let score = 10;
    let lettreJoueur = "";
    let trouvé = false;
    let reponse = 0;

    function difficulte(){
        do{
            choix = prompt("Choississez votre difficulté :\n 1. 5 lettres\n 2. 6 lettres\n 3. 7 lettres\n 4. 8 lettres\n 5. 9 lettres\n 6. 10 lettres ");
        }while (choix != '1' && choix != '2' && choix != '3' && choix != '4' && choix != '5' && choix != '6') // != && --- == = ||
        nombreLettre();
    }

    function nombreLettre(){

            switch (choix) {
                case '1':
                    choix = mots_5
                    break;
                case '2' : 
                    choix = mots_6
                    break;
                case '3' :
                    choix = mots_7
                    break;
                case '4' : 
                    choix = mots_8
                    break;
                case '5' : 
                    choix = mots_9
                    break;
                case '6' : 
                    choix = mots_10
                    break;  
                default:
                alert('Oups, problème...')
            }
            
    }

    function newGame(){
        difficulte();
        //Tirer une valeur au hasard pour capturer un mot dans mon tableau
        let hasard = parseInt(Math.random() * (choix.length - 0) + 0);
        mot = choix[hasard];

        for(i = 0; i < mot.length; i++){
            tableauLettre[i] = "-"
        }
        choisirLettre();
    }
    
    //Fonction pour demander entrée user
    function choisirLettre(){

        //Boucle do...while
        do{
            lettreJoueur = prompt(`Le mot a trouvé est ${tableauLettre.join(" ")}\n Il vous reste ${score} essais\n Choississez une lettre.`);
        }while(lettreJoueur.length > 1 || !isNaN(lettreJoueur) || lettreJoueur == "")
        //Prompt pour désigner la valeur entrée par le user dans la variable lettreJoueur
        //j'appelle ma fonction vérifierLettre avec en paramètre la variable qui accueilli l'entré user
        vérifierLettre(lettreJoueur);
    }
    
    // Fonction pour vérifier si la lettre entrée par le user se trouve dans mon mot
    function vérifierLettre(x){
        // Boucle pour parcourir chacun des index de la variable mot (une chaîne de caractère se parcours de la même manière qu'un tableau)
        for(i = 0; i <= mot.length; i++){
            //Si la lettre contenue dans l'index i de mon mot == à la lettre trouvée par le user
            //(x = paramètre de ma fonction qui a récupéré la variable lettreJoueur lors de son appel en ligne 15)
            if(mot[i] == x){
                //Je change mon boolean en true pour éviter de décrémenter mon score
                trouvé = true;
                //J'assigne à l'index i de mon tableau de lettre la valeur donnée par le joueur
                tableauLettre[i] = x;
            }
        }
        // Je vérifie si trouvé est resté sur false ou s'il a changé la valeur. Si c'est le cas, au moins une lettre a été trouvée,
        //le score ne change pas. Si le boolean reste sur false = score--
        if(trouvé == false){
            score--;
        }
        checkTableau();
    }
    
    
    //Fonction pour vérifier si toutes les lettres ont été trouvées ou si le score est = 0
    function checkTableau(){
        //je réinitialise le boolean "trouvé" en "false" pour le prochain tour de jeu
        trouvé = false
        if(score == 0){
            alert(`Vous avez perdu, le mot a trouvé était ${mot}`);
            confirm(`Voulez-vous rejouer ?`) ? game() : alert(`Au revoir !`);
        } else{
            reponse = 0
            for(i = 0; i < tableauLettre.length; i++){
                if(tableauLettre[i] != '-'){
                    reponse++;
                }
            }
    
            if(reponse == mot.length){
                alert(`Bravo ! Vous avez gagnez ! Le mot a trouvé était bel et bien ${mot} !`);
                confirm(`Voulez-vous rejouer ?`) ? game() : alert(`Au revoir !`);
            } else{
                choisirLettre();
            }
        }
    }
    
    newGame();

    
}
game();

// Je crée une boucle pour parcourir ma variable "mot"
// for(i = 0; i <= 6; i++){
//     lettreJoueur = "o"
//     console.log(mot[i]);
//     console.log(tableauLettre[i]);
//     if(mot[i] == lettreJoueur){
//         tableauLettre[i] = lettreJoueur;
//     }
//     console.log(tableauLettre);
// }