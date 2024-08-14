function loadCadastroPessoas() {
    document.getElementById('mainContent').innerHTML = `
        <h2>Cadastrar Pessoa</h2>
        <form id="cadastroPessoasForm">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" required>
            <label for="idade">Idade:</label>
            <input type="number" id="idade" required>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <button type="submit">Cadastrar</button>
        </form>
    `;

    document.getElementById('cadastroPessoasForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Pessoa cadastrada com sucesso!');
        // Adicione lógica para salvar a pessoa
    });
}

function listPessoas() {
    document.getElementById('mainContent').innerHTML = `
        <h2>Listar Pessoas</h2>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <!-- Lista de pessoas aqui -->
            </tbody>
        </table>
    `;
}
