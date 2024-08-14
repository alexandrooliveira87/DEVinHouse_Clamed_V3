function loadVendaServicos() {
    document.getElementById('mainContent').innerHTML = `
        <h2>Venda de Serviços</h2>
        <form id="vendaServicosForm">
            <label for="tipoServico">Tipo de Serviço:</label>
            <input type="text" id="tipoServico" required>
            <label for="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" required>
            <label for="valor">Valor:</label>
            <input type="number" id="valor" required>
            <label for="nomePetVenda">Nome do Pet:</label>
            <input type="text" id="nomePetVenda" required>
            <button type="submit">Vender</button>
        </form>
    `;

    document.getElementById('vendaServicosForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Serviço vendido com sucesso!');
        // Adicione lógica para vender o serviço
    });
}

function loadCadastroServicos() {
    document.getElementById('mainContent').innerHTML = `
        <h2>Cadastrar Serviço</h2>
        <form id="cadastroServicosForm">
            <label for="nomeServico">Nome:</label>
            <input type="text" id="nomeServico" required>
            <label for="descricaoServico">Descrição:</label>
            <input type="text" id="descricaoServico" required>
            <label for="precoServico">Preço:</label>
            <input type="number" id="precoServico" required>
            <button type="submit">Cadastrar</button>
        </form>
    `;

    document.getElementById('cadastroServicosForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Serviço cadastrado com sucesso!');
        // Adicione lógica para cadastrar o serviço
    });
}
