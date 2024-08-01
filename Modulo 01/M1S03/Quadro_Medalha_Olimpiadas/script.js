document.addEventListener('DOMContentLoaded', function() {
    // Dados dos países com suas medalhas
    const countries = [
        { name: "China", flag: "https://flagcdn.com/w20/cn.png", gold: 11, silver: 7, bronze: 3 },
        { name: "França", flag: "https://flagcdn.com/w20/fr.png", gold: 8, silver: 10, bronze: 8},
        { name: "Japão", flag: "https://flagcdn.com/w20/jp.png", gold: 8, silver: 3, bronze: 4 },
        { name: "Austrália", flag: "https://flagcdn.com/w20/au.png", gold: 7, silver: 6, bronze: 4 },
        { name: "Estados Unidos", flag: "https://flagcdn.com/w20/us.png", gold: 6, silver: 13, bronze: 12 },
        { name: "Grã-Bretanha", flag: "https://flagcdn.com/w20/gb.png", gold: 6, silver: 7, bronze: 7 },
        { name: "Coreia do Sul", flag: "https://flagcdn.com/w20/kr.png", gold: 6, silver: 3, bronze: 3 },
        { name: "Itália", flag: "https://flagcdn.com/w20/it.png", gold: 3, silver: 6, bronze: 4 },
        { name: "Canadá", flag: "https://flagcdn.com/w20/ca.png", gold: 2, silver: 2, bronze: 3 },
        { name: "Alemanha", flag: "https://flagcdn.com/w20/al.png", gold: 2, silver: 2, bronze: 2 },
        { name: "Países Baixos", flag: "https://flagcdn.com/w20/nl.png", gold: 2, silver: 2, bronze: 1 }
    ];

    // Função para calcular o total de medalhas
    function calculateTotal(country) {
        return country.gold + country.silver + country.bronze;
    }

    // Função para ordenar os países
    function sortCountries(countries) {
        return countries.sort((a, b) => {
            if (a.gold !== b.gold) return b.gold - a.gold;
            if (a.silver !== b.silver) return b.silver - a.silver;
            return b.bronze - a.bronze;
        });
    }

    // Função para renderizar a tabela de medalhas
    function renderTable(countries) {
        const tbody = document.querySelector('#medal-table tbody');
        tbody.innerHTML = '';

        const sortedCountries = sortCountries(countries);

        sortedCountries.forEach((country, index) => {
            const row = document.createElement('tr');

            const positionCell = document.createElement('td');
            positionCell.textContent = index + 1;
            row.appendChild(positionCell);

            const countryCell = document.createElement('td');
            countryCell.innerHTML = `<img src="${country.flag}" alt="${country.name}"> ${country.name}`;
            row.appendChild(countryCell);

            const goldCell = document.createElement('td');
            goldCell.innerHTML = `<a href="${country.name.toLowerCase().replace(/ /g, '-')}-ouro.html">${country.gold}</a>`;
            row.appendChild(goldCell);

            const silverCell = document.createElement('td');
            silverCell.innerHTML = `<a href="${country.name.toLowerCase().replace(/ /g, '-')}-prata.html">${country.silver}</a>`;
            row.appendChild(silverCell);

            const bronzeCell = document.createElement('td');
            bronzeCell.innerHTML = `<a href="${country.name.toLowerCase().replace(/ /g, '-')}-bronze.html">${country.bronze}</a>`;
            row.appendChild(bronzeCell);

            const totalCell = document.createElement('td');
            totalCell.textContent = calculateTotal(country);
            row.appendChild(totalCell);

            tbody.appendChild(row);
        });
    }

    // Renderizar a tabela ao carregar a página
    renderTable(countries);
});
