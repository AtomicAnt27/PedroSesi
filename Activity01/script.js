alert("A Ester é a rainha da beleza")

function soma() {
    var num1 = document.getElementById("n1soma").valueAsNumber;
    var num2 = document.getElementById("n2soma").valueAsNumber;

    var result = num1 + num2;
    document.getElementById("resultado1").textContent = result;
}

function subtração() {
    var num1 = document.getElementById("n1subt").valueAsNumber;
    var num2 = document.getElementById("n2subt").valueAsNumber;

    var result = num1 - num2;
    document.getElementById("resultado2").textContent = result;
}

function multiplicação() {
    var num1 = document.getElementById("n1mult").valueAsNumber;
    var num2 = document.getElementById("n2mult").valueAsNumber;

    var result = num1 * num2;
    document.getElementById("resultado3").textContent = result;
}

function divisão() {
    var num1 = document.getElementById("n1divi").valueAsNumber;
    var num2 = document.getElementById("n2divi").valueAsNumber;

    var result = num1 / num2;
    document.getElementById("resultado4").textContent = result;
}

function media() {
    var numeros = [num1, num2, num3];
    var num1 = document.getElementById("n1med").valueAsNumber;
    var num2 = document.getElementById("n2med").valueAsNumber;
    var num3 = document.getElementById("n3med").valueAsNumber;

    var result = (num1 + num2 + num3)/numeros.length;
    document.getElementById("resultado5").textContent = result;
};
