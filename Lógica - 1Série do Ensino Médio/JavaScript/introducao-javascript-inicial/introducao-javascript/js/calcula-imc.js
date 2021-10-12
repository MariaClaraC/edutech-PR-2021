var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

titulo.addEventListener("click", function mostraMensagem() {
    console.log("Olá, eu fui clicado!, eu sou a melhor nutricionista de todas, a Aparecida Nutricionista!!");
});

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];    // Imc dos pacientes

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {  // se os valores forem possiveis
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
} 

function calculaImc(peso, altura) {
    var imc = 0; 
    imc = peso / (altura * altura);
    return imc.toFixed(2); //toFixed() limita as casas decimais
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
