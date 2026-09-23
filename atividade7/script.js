// 2. Tipando o Array de Objetos com a interface
const produtos = [
    { nome: "Teclado Mecânico", preco: 350.00, categoria: "Periféricos", estoque: 15 },
    { nome: "Monitor 24 polegadas", preco: 850.00, categoria: "Monitores", estoque: 0 },
    { nome: "Mouse Gamer", preco: 120.00, categoria: "Periféricos", estoque: 10 },
    { nome: "Cadeira Ergonómica", preco: 1200.00, categoria: "Móveis", estoque: 0 },
    { nome: "Headset Bluetooth", preco: 250.00, categoria: "Periféricos", estoque: 5 }
];
// 3. Tipando os Elementos do DOM (Type Assertion)
const divLista = document.getElementById('listaProdutos');
const selectCategoria = document.getElementById('filtroCategoria');
const btnSemEstoque = document.getElementById('btnSemEstoque');
const btnVerTodos = document.getElementById('btnVerTodos');
// 4. Função para renderizar os produtos
function renderizarProdutos(lista) {
    divLista.innerHTML = "";
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
// 5. Exibir todos ao carregar a página
renderizarProdutos(produtos);
// 6. Evento para filtrar por Categoria
selectCategoria.addEventListener('change', function (evento) {
    const alvo = evento.target;
    const categoriaEscolhida = alvo.value;
    if (categoriaEscolhida === "Todas") {
        renderizarProdutos(produtos);
    }
    else {
        const filtrados = produtos.filter(p => p.categoria === categoriaEscolhida);
        renderizarProdutos(filtrados);
    }
});
// 7. Evento para ver apenas produtos sem estoque
btnSemEstoque.addEventListener('click', function () {
    const semEstoque = produtos.filter(p => p.estoque === 0);
    renderizarProdutos(semEstoque);
    selectCategoria.value = "Todas";
});
// 8. Evento para limpar filtros e ver todos
btnVerTodos.addEventListener('click', function () {
    renderizarProdutos(produtos);
    selectCategoria.value = "Todas";
});
export {};
