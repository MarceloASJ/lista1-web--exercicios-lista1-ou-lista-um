const btnGerar = document.getElementById('btnGerar');
const btnLimpar = document.getElementById('btnLimpar');
const inputNumero = document.getElementById('numero');
const divResultado = document.getElementById('resultado');

btnGerar.addEventListener('click', function() {
    let numeroStr = inputNumero.value;
    
    // Validação para impedir campo vazio
    if (numeroStr === "") {
        alert("Por favor, insira um número para gerar a tabuada.");
        return;
    }

    let numero = Number(numeroStr);
    let tabuadaHTML = `<h3>Tabuada do ${numero}</h3>`;
    
    // Laço for para multiplicar o número de 1 a 10
    for (let i = 1; i <= 10; i++) {
        let multiplicacao = numero * i;
        tabuadaHTML += `<p>${numero} x ${i} = ${multiplicacao}</p>`;
    }

    // Insere o texto gerado na div e torna-a visível
    divResultado.innerHTML = tabuadaHTML;
    divResultado.style.display = 'block';
});

btnLimpar.addEventListener('click', function() {
    // Limpa o input e oculta a div de resultado
    inputNumero.value = "";
    divResultado.innerHTML = "";
    divResultado.style.display = 'none';
});