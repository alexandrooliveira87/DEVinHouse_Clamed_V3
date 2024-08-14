function showSection(section) {
    document.getElementById('mainContent').innerHTML = ''; // Limpa o conteúdo
    if (section === 'administracao') {
        document.querySelector('.sidebar > ul > li:nth-child(1)').classList.add('active');
        document.querySelector('.sidebar > ul > li:nth-child(2)').classList.remove('active');
    } else if (section === 'servicos') {
        document.querySelector('.sidebar > ul > li:nth-child(1)').classList.remove('active');
        document.querySelector('.sidebar > ul > li:nth-child(2)').classList.add('active');
    }
}

function logout() {
    // Lógica para sair do sistema
    alert('Saindo do sistema...');
    window.location.href = 'index.html'; // Redireciona para a página de login
}
