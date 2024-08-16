function loadCadastroServicos() {
    // Implementar lógica se necessário
}

function listServicos() {
    const servicos = JSON.parse(localStorage.getItem('servicos')) || [];
    const servicosList = document.getElementById('servicosList');
    servicosList.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${servicos.map(servico => `
                    <tr>
                        <td>${servico.nome}</td>
                        <td>${servico.descricao}</td>
                        <td>${servico.preco}</td>
                        <td>
                            <button onclick="editServico('${servico.nome}')">Alterar</button>
                            <button onclick="disableServico('${servico.nome}')">Inabilitar</button>
                            <button onclick="deleteServico('${servico.nome}')">Excluir</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function editServico(nome) {
    // Implementar lógica de edição
}

function disableServico(nome) {
    // Implementar lógica de inabilitação
}

function deleteServico(nome) {
    let servicos = JSON.parse(localStorage.getItem('servicos')) || [];
    servicos = servicos.filter(servico => servico.nome !== nome);
    localStorage.setItem('servicos', JSON.stringify(servicos));
    listServicos();
}

document.addEventListener('DOMContentLoaded', listServicos);
