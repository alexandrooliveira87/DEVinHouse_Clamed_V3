
// 1 - variaveis

let name = "John Doe";
const idade = 30;
let altura = 1.75;
let peso = 80;

console.log(name);
console.log(idade);
console.log(altura);
console.log(peso);



 //  2 - promot

 const age = prompt("Digite sua idade");

 console.log(`Você tem ${age} anos`);



 // 3 - alert

alert("testando");


// 4 - math

console.log(Math.PI);
console.log(Math.floor(Math.random() * 10));
console.log(Math.max(5,2,1,10));
console.log(Math.floor( 5.1585));


// 5 - console

console.log("Hello World");
console.error("Erro ao realizar a operação");
console.warn("Atenção, algo pode estar errado");
console.time("Timer");
console.timeEnd("Timer");


// 6 - if / else

    let numero = 5;

    if (numero > 3) {
        console.log("O número é maior que 3");
    } else {
        console.log("O número é menor ou igual a 3");
    }

    const m = 10;

    if (m % 2 === 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }

    const user = "Alexandro";

    if (user === "Alexandro") {
        console.log("Olá Alexandro!");
    } else {
        console.log("Olá visitante!");
    }

// 7 - if else if

const num = 10;

if (num > 10) {
    console.log("O número é maior que 10");
} else if (num > 5) {
    console.log("O número é maior que 5 e menor ou igual a 10");
} else {
    console.log("O número é menor ou igual a 5");
}

const nome = "Alex";

if (nome === "Alex") {
    console.log("Olá Alex!");
} else if (nome === "Bob") {
    console.log("Olá Bob!");
} else {
    console.log("Olá visitante!");
}



// 8 - While

let p = 0;

while (p < 10) {
    console.log(`repetindo ${p}`);
    p++;
} 


// 9 - do While

let q = 0;

do {
    console.log(`repetindo ${q}`);
    q++;
} while (q < 10);



// 10 - for

for (let i = 1; i <= 10; i++) {
    console.log(`repetindo ${i}`);
}


// 11 - Break

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(`repetindo ${i}`);
}



// 12 - Continue

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(`repetindo ${i}`);
}



// 13 - Switch

const diaSemana = 4;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}

const job = "Advogado" ;

switch (job) {
    case "Programador":
        console.log("Desenvolvedor front-end");
        break;
    case "Desenvolvedor back-end":
        console.log("Desenvolvedor back-end");
        break;
    case "Designer":
        console.log("Desenvolvedor UX/UI");
        break;
    case "Advogado":
        console.log("Advogado");
        break;
    default:
        console.log("Cargo não encontrado");
}

