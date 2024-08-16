function loadCadastroVendas() {
    // Implementar lógica se necessário
}

function listVendas() {
    const vendas = JSON.parse(localStorage.getItem('vendas')) || [];
    const vendasList = document.getElementById('vendasList');
    vendasList.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Pet</th>
                    <th>Tutor</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Serviço</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${vendas.map(venda => `
                    <tr>
                        <td>${venda.pet}</td>
                        <td>${venda.tutor}</td>
                        <td>${venda.telefone}</td>
                        <td>${venda.endereco}</td>
                        <td>${venda.servico}</td>
                        <td>${venda.preco}</td>
                        <td>${venda.quantidade}</td>
                        <td>${venda.descricao}</td>
                        <td>
                            <button onclick="cancelVenda('${venda.pet}')">Cancelar</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function cancelVenda(pet) {
    // Implementar lógica de cancelamento
}

document.addEventListener('DOMContentLoaded', listVendas);
