// Dados em memória
let produtos = [];
let categorias = [];
let unidades = [];

// Funções para salvar e carregar dados em memória
function salvarProduto(produto) {
    produtos.push(produto);
}

function salvarCategoria(categoria) {
    categorias.push(categoria);
}

function salvarUnidade(unidade) {
    unidades.push(unidade);
}

function carregarCategorias() {
    const selectCategoria = document.getElementById('produto-categoria');
    selectCategoria.innerHTML = '';

    categorias.forEach(c => {
        const option = document.createElement('option');
        option.value = c.id;
        option.textContent = c.nome;
        selectCategoria.appendChild(option);
    });
}

function carregarUnidades() {
    const selectUnidade = document.getElementById('produto-unidade');
    selectUnidade.innerHTML = '';

    unidades.forEach(u => {
        const option = document.createElement('option');
        option.value = u.id;
        option.textContent = u.nome;
        selectUnidade.appendChild(option);
    });
}

// Funções de manipulação de produtos
function adicionarProduto() {
    const id = document.getElementById('produto-id').value;
    const nome = document.getElementById('produto-nome').value;
    const categoria = document.getElementById('produto-categoria').value;
    const unidade = document.getElementById('produto-unidade').value;

    salvarProduto({ id, nome, categoria, unidade });
    alert('Produto cadastrado com sucesso!');
}

function consultarProduto() {
    const id = document.getElementById('consultar-produto-id').value;
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        document.getElementById('resultado-consulta').innerHTML = `
            ID: ${produto.id}<br>
            Nome: ${produto.nome}<br>
            Categoria: ${produto.categoria}<br>
            Unidade de Medida: ${produto.unidade}
        `;
    } else {
        document.getElementById('resultado-consulta').innerHTML = 'Produto não encontrado.';
    }
}

function listarProdutos() {
    const lista = document.getElementById('lista-produtos');
    lista.innerHTML = '';

    produtos.forEach(p => {
        const item = document.createElement('li');
        item.textContent = `ID: ${p.id}, Nome: ${p.nome}, Categoria: ${p.categoria}, Unidade: ${p.unidade}`;
        lista.appendChild(item);
    });
}

function emitirRelatorio() {
    const relatorio = document.getElementById('relatorio-produtos');
    relatorio.innerHTML = '';

    if (produtos.length > 0) {
        let conteudo = '<h3>Relatório de Produtos</h3><ul>';
        produtos.forEach(p => {
            conteudo += `<li>ID: ${p.id}, Nome: ${p.nome}, Categoria: ${p.categoria}, Unidade: ${p.unidade}</li>`;
        });
        conteudo += '</ul>';
        relatorio.innerHTML = conteudo;
    } else {
        relatorio.innerHTML = 'Nenhum produto cadastrado.';
    }
}

// Funções de manipulação de categorias
function adicionarCategoria() {
    const id = document.getElementById('categoria-id').value;
    const nome = document.getElementById('categoria-nome').value;

    salvarCategoria({ id, nome });
    alert('Categoria cadastrada com sucesso!');
    carregarCategorias(); // Atualiza o select na página principal
}

function consultarCategoria() {
    const id = document.getElementById('consultar-categoria-id').value;
    const categoria = categorias.find(c => c.id === id);

    if (categoria) {
        document.getElementById('resultado-consulta-categoria').innerHTML = `
            ID: ${categoria.id}<br>
            Nome: ${categoria.nome}
        `;
    } else {
        document.getElementById('resultado-consulta-categoria').innerHTML = 'Categoria não encontrada.';
    }
}

// Funções de manipulação de unidades
function adicionarUnidade() {
    const id = document.getElementById('unidade-id').value;
    const nome = document.getElementById('unidade-nome').value;

    salvarUnidade({ id, nome });
    alert('Unidade de Medida cadastrada com sucesso!');
    carregarUnidades(); // Atualiza o select na página principal
}

function consultarUnidade() {
    const id = document.getElementById('consultar-unidade-id').value;
    const unidade = unidades.find(u => u.id === id);

    if (unidade) {
        document.getElementById('resultado-consulta-unidade').innerHTML = `
            ID: ${unidade.id}<br>
            Nome: ${unidade.nome}
        `;
    } else {
        document.getElementById('resultado-consulta-unidade').innerHTML = 'Unidade de Medida não encontrada.';
    }
}

// Inicializa o sistema
document.addEventListener('DOMContentLoaded', () => {
    carregarCategorias();
    carregarUnidades();

    // Formulários
    document.getElementById('form-produto').addEventListener('submit', (e) => {
        e.preventDefault();
        adicionarProduto();
    });

    document.getElementById('form-categoria').addEventListener('submit', (e) => {
        e.preventDefault();
        adicionarCategoria();
    });

    document.getElementById('form-unidade').addEventListener('submit', (e) => {
        e.preventDefault();
        adicionarUnidade();
    });
});
