// Função para mostrar o conteúdo
function showContent(html) {
    document.getElementById('content').innerHTML = html;
}

// Inicializa os manipuladores de eventos
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cadastroPessoas').addEventListener('click', function() {
        showContent(`
            <h2>Cadastro de Pessoas</h2>
            <form id="cadastroPessoaForm">
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" required>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" required>
                <label for="sexo">Sexo:</label>
                <select id="sexo" required>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>
                <label for="idade">Idade:</label>
                <input type="number" id="idade" required>
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" required>
                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" required>
                <label for="foto">Foto:</label>
                <input type="file" id="foto">
                <button type="submit">Cadastrar</button>
            </form>
        `);
    });

    document.getElementById('listarPessoas').addEventListener('click', function() {
        showContent(`
            <h2>Listar Pessoas</h2>
            <div id="pessoasList"></div>
        `);
        listPessoas();
    });

    document.getElementById('cadastroPets').addEventListener('click', function() {
        showContent(`
            <h2>Cadastro de Pets</h2>
            <div id="cadastroPetsContent"></div>
        `);
        loadCadastroPets();
    });

    document.getElementById('listarPets').addEventListener('click', function() {
        showContent(`
            <h2>Listar Pets</h2>
            <div id="petsList"></div>
        `);
        listPets();
    });

    document.getElementById('cadastroServicos').addEventListener('click', function() {
        showContent(`
            <h2>Cadastro de Serviços</h2>
            <form id="cadastroServicosForm">
                <label for="nomeServico">Nome:</label>
                <input type="text" id="nomeServico" required>
                <label for="descricao">Descrição:</label>
                <input type="text" id="descricao" required>
                <label for="preco">Preço:</label>
                <input type="number" id="preco" required>
                <button type="submit">Cadastrar Serviço</button>
            </form>
        `);
        document.getElementById('cadastroServicosForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const servicoData = {
                nome: document.getElementById('nomeServico').value,
                descricao: document.getElementById('descricao').value,
                preco: document.getElementById('preco').value
            };
            let servicos = JSON.parse(localStorage.getItem('servicos')) || [];
            servicos.push(servicoData);
            localStorage.setItem('servicos', JSON.stringify(servicos));
            alert('Serviço cadastrado com sucesso!');
            document.getElementById('cadastroServicosForm').reset();
        });
    });

    document.getElementById('listarServicos').addEventListener('click', function() {
        showContent(`
            <h2>Listar Serviços</h2>
            <div id="servicosList"></div>
        `);
        listServicos();
    });

    document.getElementById('logoutButton').addEventListener('click', function() {
        window.location.href = 'login.html'; // Redireciona para a página de login
    });
});
