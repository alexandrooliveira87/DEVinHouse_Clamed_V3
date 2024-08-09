function carregarDados() {
    const dados =  JSON.parse(localStorage.getItem("perfil"))
    
    document.body.style.background = dados.cor
  
    document.getElementById("foto").src = dados.foto
  
    document.getElementById("nome").innerText = dados.nome
    document.getElementById("idade").innerText = dados.idade
    document.getElementById("descricao").innerText = dados.descricao
  
  
  }
  
  
  window.onload = carregarDados