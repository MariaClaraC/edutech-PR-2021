//trazer os valores dos pacientes no javascript
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); // previne que a pagina recarregue

    //para pegar o formulário e o paciente do form do html, monta uma tr a partir dos valores
    var form = document.querySelector("#form-adicionar");
    var paciente = obtentoInformacoesDoForm(form);
    
    
    var erros = validaPaciente(paciente);
    
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacientesNaTabela(paciente)
    
    form.reset();
    
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
    
    });

function adicionaPacientesNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
    

function obtentoInformacoesDoForm(form) {  //formulário com os valores
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
 

//cria o Tr e os td's do paciente, coloca os valores nos td's, coloca os td's(filhos) dentro da tr(pai) e retorna o tr com os pacientes
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente) {

    var erros = []; //array de erros
    
    if (!validaPeso(paciente.peso))     erros.push("Peso é inválido");
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    if (paciente.nome.length == 0)      erros.push("O nome não pode ser em branco");
    if (paciente.gordura.length == 0)   erros.push("A gordura não pode ser em branco");
    if (paciente.peso.length == 0)      erros.push("O peso não pode ser em branco");
    if (paciente.altura.length == 0)    erros.push("A altura não pode ser em branco");

    return erros;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
