function calcul_moyenne() {
    var n1 = prompt("Donnez la première note 1 :");
    var n2 = prompt("Donnez la deuxième note 2 :");
    var n3 = prompt("Donnez la troisième note 3 :");

    var somme = Number(n1) + Number(n2) + Number(n3);

document.write("Voici la somme: " + somme + "<br>");

    var moyenne = somme / 3;

    document.write("Voici la moyenne: " + moyenne  + "<br>");

if (moyenne < 10) {
 document.write("Vous n'êtes pas admis");

}

else {


document.write("Vous êtes admis");
}

} 



function test_age() {
    var age = prompt("Quel est votre âge ?");
 if (age < 18) {
        document.write("Vous êtes mineur.");
        document.bgColor = "red";
    }

    else {
    document.write("Vous êtes majeur.");
    document.bgColor="green";

    }



}

function simple_affichage() {
    var name= prompt("Quel est votre nom ?");
    let prenom= prompt("Quel est votre prénom ?");

    document.write('<div style="margin:auto; width:300px; border:2px solid blue;">')
    document.write("bonjour" + prenom + " " + name);
    document.write("</div>")
}

function test_couleur() {
    let couleur = prompt("donner une couleur :");

    if (couleur == "rouge" || couleur == "red") {
        document.body.style.backgroundColor = "red";
    }
    else if (couleur == "bleu" || couleur == "blue") {
        document.body.style.backgroundColor = "blue";
    }
    else if (couleur == "vert" || couleur == "green") {
        document.body.style.backgroundColor = "green";
    }
    else if (couleur == "rose" || couleur == "pink") {
        document.body.style.backgroundColor = "pink";
    }
    else {
        document.write("couleur non reconnue");
    } 
}
