function calcul_moyenne() {
    var n1 = prompt("Donnez la première note sur 20 :");
    var n2 = prompt("Donnez la deuxième note sur 20 :");
    var n3 = prompt("Donnez la troisième note sur 20 :");

    var somme = Number(n1) + Number(n2) + Number(n3);
    var moyenne = somme / 3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    }
    else if (moyenne >= 10 && moyenne < 12) {
        document.write("Admis – Passable");
    }
    else if (moyenne >= 12 && moyenne < 14) {
        document.write("Admis – Bien");
    }
    else {
        document.write("Admis – Très bien");
    }

    document.write("<br><a href='index.html'>Retour</a>");
}

function test_temperature() {
    var temp = prompt("Donnez la température en °C :");

    if (temp < 10) {
        document.write("Froid");
    }
    else if (temp >= 10 && temp <= 25) {
        document.write("Normal");
    }
    else {
        document.write("Chaud");
    }

    document.write("<br><a href='index.html'>Retour</a>");
}

function comparaison_nombres() {
    var nb1 = prompt("Donnez le premier nombre :");
    var nb2 = prompt("Donnez le deuxième nombre :");

    nb1 = Number(nb1);
    nb2 = Number(nb2);

    if (nb1 > nb2) {
        document.write("Le plus grand nombre est : " + nb1 + "<br>");
        document.write("Le plus petit nombre est : " + nb2);
    }
    else if (nb2 > nb1) {
        document.write("Le plus grand nombre est : " + nb2 + "<br>");
        document.write("Le plus petit nombre est : " + nb1);
    }
    else {
        document.write("Les deux nombres sont égaux.");
    }

    document.write("<br><a href='index.html'>Retour</a>");
}