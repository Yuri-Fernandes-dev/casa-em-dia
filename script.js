// Array para armazenar os itens
let itens = [];

// Elementos do DOM
const formNovoItem = document.getElementById('formNovoItem');
const listaContainer = document.getElementById('listaContainer');

// Função para criar o HTML de um item
function criarItemHTML(item) {
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    
    itemCard.innerHTML = `
        <div class="item-nome">${item.nome}</div>
        <span class="item-status status-${item.status}">${item.status}</span>
        <div class="item-acoes">
            <button class="btn-status" onclick="alterarStatus('${item.nome}')">
                Mudar Status
            </button>
            <button class="btn-excluir" onclick="excluirItem('${item.nome}')">
                Excluir
            </button>
        </div>
    `;
    
    return itemCard;
}

// Função para atualizar a lista de itens na tela
function atualizarLista() {
    listaContainer.innerHTML = '';
    itens.forEach(item => {
        listaContainer.appendChild(criarItemHTML(item));
    });
}

// Função para adicionar novo item
function adicionarItem(nome, status) {
    if (itens.some(item => item.nome.toLowerCase() === nome.toLowerCase())) {
        alert('Este item já existe na lista!');
        return false;
    }
    
    itens.push({ nome, status });
    atualizarLista();
    return true;
}

// Função para excluir item
function excluirItem(nome) {
    if (confirm(`Deseja realmente excluir o item "${nome}"?`)) {
        itens = itens.filter(item => item.nome !== nome);
        atualizarLista();
    }
}

// Função para alterar status do item
function alterarStatus(nome) {
    const item = itens.find(item => item.nome === nome);
    if (!item) return;
    
    const statusMap = {
        "OK": "Acabando",
        "Acabando": "Acabou",
        "Acabou": "OK"
    };
    
    item.status = statusMap[item.status];
    atualizarLista();
}

// Event Listeners
formNovoItem.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nomeInput = document.getElementById('nomeItem');
    const statusInput = document.getElementById('statusItem');
    
    if (adicionarItem(nomeInput.value.trim(), statusInput.value)) {
        nomeInput.value = '';
        statusInput.value = 'OK';
    }
});

// Inicializar a lista
atualizarLista(); 