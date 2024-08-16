function loadCadastroPessoas() {
    // Implementar lógica se necessário
}

function listPessoas() {
    const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    const pessoasList = document.getElementById('pessoasList');
    pessoasList.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Pet</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${pessoas.map(pessoa => `
                    <tr>
                        <td>${pessoa.nome}</td>
                        <td>${pessoa.cpf}</td>
                        <td>${pessoa.email}</td>
                        <td>${pessoa.telefone}</td>
                        <td>${pessoa.endereco}</td>
                        <td>${pessoa.pet}</td>
                        <td>
                            <button onclick="editPessoa('${pessoa.cpf}')">Alterar</button>
                            <button onclick="deletePessoa('${pessoa.cpf}')">Excluir</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function editPessoa(cpf) {
    // Implementar lógica de edição
}

function deletePessoa(cpf) {
    let pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    pessoas = pessoas.filter(pessoa => pessoa.cpf !== cpf);
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
    listPessoas();
}

document.addEventListener('DOMContentLoaded', listPessoas);
