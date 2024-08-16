/*
// 1 - Arrays

const lista = [1, 2, 3, 4, 5];

console.log(lista[0]); // Imprime: 1
console.log(lista); // Arrays
console.log(typeof lista); //



// 2 - Proproedades

const numeros = [1, 2, 3, 4, 5];

console.log(numeros.length); // Imprime: 5

const myName = 'Alex';

console.log(myName.length); // Imprime: 4



// 3 - metódos

const numeros = [1, 2, 3, 4, 5];

console.log(numeros.push(6)); // Adiciona um elemento ao final do array e retorna o novo comprimento do array
console.log(numeros); // [1, 2, 3, 4, 5, 6]


// 5 - objetos

const pessoa = {
    nome: 'Alex',
    idade: 25,
    endereco: {
        rua: 'Rua das Flores',
        numero: 123
    }
};

console.log(pessoa.nome, pessoa.idade,pessoa.endereco); // Imprime: Alex


// 6 - criando e deletando propiedades

const carro = {
    motor: 2.0,
    marca: "VW",
    modelo: "Tiguan",
    km: 20000,
}

console.log(carro); // { motor: 2.0, marca: 'VW', modelo: 'Tiguan', km: 20000 }

carro.cor = "Azul";

delete carro.motor;

console.log(carro);


// 7 - loop em arrays


const users = ["Alexander", "João", "Manoel", "Maria"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuáiro ${users[i]}`);
}


// 8 - push e pop


const array = ["A", "B", "C", "D", "E", "F"];

array.push("G")

console.log(array); // ["A", "B", "C", "D", "E", "F", "G"]

console.log(array.length); 

array.pop(array);

console.log(array); 

const itemRemovido = array.pop();

console.log(itemRemovido); // G

console.log(array); 



// 13 - trim

const nome = " Alex  ";

console.log(nome.trim()); // Imprime: Alex

 

// 14 - padstart

const nome = "Alex";

console.log(nome.padStart(10, "-")); // Imprime: --Alex--

// 15 - padEnd

const nomeEnd = "Alex";

console.log(nomeEnd.padEnd(10, "-")); // Imprime: Alex-----



// 16 - split 

const nome = "Alexandre";

console.log(nome.split("")); // Imprime: ["A", "l", "e", "x", "a", "n", "d", "r", "e"]

console.log(nome.split("a")); // Imprime: ["Alex", "ndre"]

// - join 

const nomes = ["Alex", "João", "Manoel", "Maria"];

console.log(nomes.join(", ")); // Imprime: Alex, João, Manoel, Maria

console.log(nomes.join("")); // Imprime: AlexJoãoManoelMaria


// 17 - repeat

const nome = "Alex";

console.log(nome.repeat(5)); // Imprime: AlexAlexAlexAlexAlexAlex

console.log(nome.repeat(3, "-")); // Imprime: Alex-Alex-Alex


*/
// 18 - Rest parameter


const somaInfinita = (...args) => {

    let total = 0;

    for (let i = 0; args.length; i++) { 
        total += args[i];
    }

    return total;

};


console.log(somaInfinita(1, 2, 3, 4, 5)); // Imprime: 15
