// Array para guardar as tarefas
let tarefas = [];

function adicionarTarefa() {
    let input = document.getElementById('novaTarefa');
    let texto = input.value.trim(); // .trim() remove espaços vazios nas pontas

    if (texto !== "") {
        tarefas.push(texto); // Adiciona ao array
        input.value = ""; // Limpa o campo
        listarTarefas(); // Atualiza a tela
    } else {
        alert("Por favor, digite uma tarefa válida.");
    }
}

function listarTarefas() {
    let ul = document.getElementById('listaTarefas');
    ul.innerHTML = ""; // Limpa a lista HTML antes de recriar

    // Percorre o array e cria os elementos <li>
    for (let i = 0; i < tarefas.length; i++) {
        // Usa o índice 'i' para identificar a tarefa no botão de remover
        ul.innerHTML += `
            <li>
                ${tarefas[i]} 
                <button class="btn-remover" onclick="removerTarefa(${i})">Remover</button>
            </li>
        `;
    }
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1); // Remove 1 elemento a partir da posição 'indice'
    listarTarefas(); // Atualiza a tela após remover
}

// Conecta a função ao clique do botão principal
document.getElementById('btnAdicionar').addEventListener('click', adicionarTarefa);