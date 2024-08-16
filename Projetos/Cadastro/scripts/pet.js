function loadCadastroPets() {
    // Implementar lógica se necessário
}

function listPets() {
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const petsList = document.getElementById('petsList');
    petsList.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Raça</th>
                    <th>Idade</th>
                    <th>Observações</th>
                    <th>Tutor</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${pets.map(pet => `
                    <tr>
                        <td>${pet.nome}</td>
                        <td>${pet.raca}</td>
                        <td>${pet.idade}</td>
                        <td>${pet.observacoes}</td>
                        <td>${pet.tutor}</td>
                        <td>
                            <button onclick="editPet('${pet.nome}')">Alterar</button>
                            <button onclick="deletePet('${pet.nome}')">Excluir</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function editPet(nome) {
    // Implementar lógica de edição
}

function deletePet(nome) {
    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    pets = pets.filter(pet => pet.nome !== nome);
    localStorage.setItem('pets', JSON.stringify(pets));
    listPets();
}

document.addEventListener('DOMContentLoaded', listPets);
