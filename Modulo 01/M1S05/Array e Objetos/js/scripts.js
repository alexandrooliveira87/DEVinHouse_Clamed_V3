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
 */

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











