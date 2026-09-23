document.getElementById('btnCalcular').addEventListener('click', function() {
    // 1. Capturar os valores dos campos HTML
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);

    // 2. Utilizar variáveis e operadores aritméticos
    let media = (nota1 + nota2 + nota3) / 3;
    let situacao = "";
    let classeCor = "";

    // 3. Usar estruturas condicionais if, else if e else
    if (media >= 7.0) {
        situacao = "Aprovado";
        classeCor = "aprovado";
    } else if (media >= 5.0) {
        situacao = "Recuperação";
        classeCor = "recuperacao";
    } else {
        situacao = "Reprovado";
        classeCor = "reprovado";
    }

    // 4. Exibir média e situação
    let divResultado = document.getElementById('resultado');
    divResultado.innerHTML = `Média: ${media.toFixed(1)} <br> Situação: ${situacao}`;
    
    // Atualizar as classes de cor do resultado
    divResultado.className = ""; // Limpa classes antigas
    divResultado.classList.add(classeCor);
});