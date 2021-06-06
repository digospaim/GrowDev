var nome = "Rodrigo Paim";
var cargo = "Desenvolvedor";

var nomeHtml = document.getElementById("nomeCurriculo");
var cargoHtml = document.getElementById("nomeCargo");
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

function mudarNome(nome) {
    nomeHtml.innerHTML = nome;
}

function mudarCargo(cargo){
    cargoHtml.innerHTML = cargo;
}

function botaoProjetos() {
    texto1.style.display = "none";
    texto2.style.display = "block";
}

function botaoSobre() {
    texto1.style.display = "block";
    texto2.style.display = "none";
}

mudarNome(nome);
mudarCargo(cargo);