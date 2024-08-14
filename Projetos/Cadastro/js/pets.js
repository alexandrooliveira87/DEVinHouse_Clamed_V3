function loadCadastroPets() {
    document.getElementById('mainContent').innerHTML = `
        <h2>Cadastrar Pet</h2>
        <form id="cadastroPetsForm">
            <label for="nomePet">Nome:</label>
            <input type="text" id="nomePet" required>
            <label for="raca">Raça:</label>
            <input type="text" id="raca" required>
            <label for="tipo">Tipo:</label>
            <select id="tipo">
                <option value="gato">Gato</option>
                <option value="cachorro">Cachorro</option>
                <option value="passaro">Pássaro</option>
                <option value="outros">Outros</option>
            </select>
            <label for="tutor">Nome do Tutor:</label>
            <input type="text" id="tutor" required>
            <button type="submit">Cadastrar</button>
        </form>
    `;

    document.getElementById('cadastroPetsForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Pet cadastrado com sucesso!');
        // Adicione lógica para salvar o pet
    });
}

function listPets() {
    document.getElementById('mainContent').innerHTML = `
        <h2>Listar Pets</h2>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Raça</th>
                    <th>Tipo</th>
                    <th>Tutor</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <!-- Lista de pets aqui -->
                <tr>
                    <td>Nome do Pet</td>
                    <td>Raça</td>
                    <td>Tipo</td>
                    <td>Tutor</td>
                    <td>
                        <button onclick="editPet()">Editar</button>
                        <button onclick="deletePet()">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

function editPet() {
    // Lógica para editar um pet
    alert('Função de edição ainda não implementada!');
}

function deletePet() {
    // Lógica para excluir um pet
    alert('Função de exclusão ainda não implementada!');
}
