function calcularMediaNotas(notaUm, notaDois, notaTres, notaQuatro) {
    return (notaUm + notaDois + notaTres + notaQuatro) / 4;
}

document.getElementById('calculadora').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    var notaUm = parseFloat(document.getElementById('notaUm').value);
    var notaDois = parseFloat(document.getElementById('notaDois').value) ;
    var notaTres = parseFloat(document.getElementById('notaTres').value) ;
    var notaQuatro = parseFloat(document.getElementById('notaQuatro').value) ;

    var media = calcularMediaNotas(notaUm, notaDois, notaTres, notaQuatro);

    document.getElementById('resultado').value = media.toFixed(2); 
});







