function addition() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = a + b;
}

function soustraction() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = a - b;
}

function multiplication() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = a * b;
}

function division() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    
    if (b === 0) {
        document.getElementById("t3").value = "Erreur";
    } else {
        document.getElementById("t3").value = a / b;
    }
}

function permute() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    document.getElementById("t1").value = b;
    document.getElementById("t2").value = a;
}

function parite() {
    var x = Number(document.getElementById("t1").value);
    if (x % 2 === 0) {
        document.getElementById("t4").value = "Pair";
    } else {
        document.getElementById("t4").value = "Impair";
    }
}

function effacer() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
}