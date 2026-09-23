// 1. Array com pelo menos cinco produtos usando objetos
const produtos = [
    { nome: "Teclado Mecânico", preco: 350.00, categoria: "Periféricos", estoque: 15 },
    { nome: "Monitor 24 polegadas", preco: 850.00, categoria: "Monitores", estoque: 0 },
    { nome: "Mouse Gamer", preco: 120.00, categoria: "Periféricos", estoque: 10 },
    { nome: "Cadeira Ergonómica", preco: 1200.00, categoria: "Móveis", estoque: 0 },
    { nome: "Headset Bluetooth", preco: 250.00, categoria: "Periféricos", estoque: 5 }
];

const divLista = document.getElementById('listaProdutos');

// 2. Função para renderizar (exibir) os produtos na tela
function renderizarProdutos(lista) {
    divLista.innerHTML = ""; // Limpa a tela antes de desenhar
    
    for (let produto of lista) {
        let statusEstoque = produto.estoque > 0 
            ? `<p>Estoque: ${produto.estoque} un.</p>` 
            : `<p class="esgotado">Sem estoque!</p>`;

        divLista.innerHTML += `
            <div class="card">
                <h3>${produto.nome}</h3>
                <p><strong>R$ ${produto.preco.toFixed(2)}</strong></p>
                <p><small>${produto.categoria}</small></p>
                ${statusEstoque}
            </div>
        `;
    }
}

// 3. Exibir todos os produtos logo que a página carrega
renderizarProdutos(produtos);

// 4. Mostrar apenas produtos de uma categoria selecionada
document.getElementById('filtroCategoria').addEventListener('change', function(evento) {
    let categoriaEscolhida = evento.target.value;
    
    if (categoriaEscolhida === "Todas") {
        renderizarProdutos(produtos);
    } else {
        // O método filter cria uma nova lista apenas com os que passam no teste
        let filtrados = produtos.filter(p => p.categoria === categoriaEscolhida);
        renderizarProdutos(filtrados);
    }
});

// 5. Informar quais produtos estão sem estoque
document.getElementById('btnSemEstoque').addEventListener('click', function() {
    let semEstoque = produtos.filter(p => p.estoque === 0);
    renderizarProdutos(semEstoque);
    document.getElementById('filtroCategoria').value = "Todas"; // Reseta o select visualmente
});

// Botão para limpar filtros
document.getElementById('btnVerTodos').addEventListener('click', function() {
    renderizarProdutos(produtos);
    document.getElementById('filtroCategoria').value = "Todas";
});