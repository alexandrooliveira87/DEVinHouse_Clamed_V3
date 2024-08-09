function cadastrarGato(event){
    event.preventDefault()

    const nome = document.getElementById("catName").value
    const idade = document.getElementById("catAge").value
    const descricao = document.getElementById("catDescription").value
    const url = document.getElementById("catImage").value
    const cor = document.getElementById("catColor").value

    const gato = {
        nome: nome,
        idade: idade,
        descricao: descricao,
        foto: url,
        cor: cor
    }

    console.log(gato)
    
}

document
.getElementById("catForm")
.addEventListener("submit", cadastrarGato )

function alterarImagem(event) {
    const valorUrl = event.srcElement.value 
    document.getElementById("catImagePreview").src = valorUrl
    document.getElementById("catImagePreview").style.borderRadius = "50%"
}

localStorage.setItem("perfil", JSON.stringify(gato))

document
.getElementById("catImage")
.addEventListener("input", alterarImagem)







/*
        document.getElementById('catImage').addEventListener('input', function(event) {
            const url = event.target.value;
            const img = document.getElementById('catImagePreview');
            img.src = url;
        });

        document.getElementById('catForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('catName').value;
            const age = document.getElementById('catAge').value;
            const description = document.getElementById('catDescription').value;
            const imageUrl = document.getElementById('catImage').value;
            const color = document.getElementById('catColor').value;

            const catData = {
                name: name,
                age: age,
                description: description,
                image: imageUrl,
                color: color
            };

            const cats = JSON.parse(localStorage.getItem('cats')) || [];
            cats.push(catData);
            localStorage.setItem('cats', JSON.stringify(cats));
            alert('Gato cadastrado com sucesso!');
            document.getElementById('catForm').reset();
            document.getElementById('catImagePreview').src = '';
        });
        */