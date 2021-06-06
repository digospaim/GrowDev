var nome = "Rodrigo Paim";
var cargo = "Desenvolvedor";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("nomeCargo");
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function mudarCargo(cargo){
    cargoHtml.innerHTML = cargo;
}

function clickNoProjetos() {
    texto1.style.display = "none";
    texto2.style.display = "block";
}

function clickNoSobre() {
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
mudarCargo(cargo);