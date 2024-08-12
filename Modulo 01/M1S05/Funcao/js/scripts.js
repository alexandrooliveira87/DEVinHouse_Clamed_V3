// 1 - criando uma função

function minhafuncao(){


}

minhafuncao();


function funcaoomparametro(txt){
    console.log(`imprimindo ${txt}`);
}

funcaoomparametro("Olá, eu sou um parametro!");


// 2 - retorno de valores

function soma(a, b){
    return a + b;
}

console.log(soma(2, 3));

const a = 10;
const b = 20;
const c = 30;

function sum(n1,n2) { 
return n1 + n2;
}

console.log(sum(a,b));

// 3 - escopo da função

let  y=10;

function testandoescopo() {
    let y = 25;
    console.log(`Y dentro da funçaõ ${y}`);
}
testandoescopo();

console.log(`Y fora da função ${y}`);


// 4 - escopo alinhado

let m = 10;

function escopoalinhado() {
  let m = 20;

  if (true) {
    let m = 30;

    if (true) {
      let m = 40;
      console.log(`M dentro da função ${m}`);
    }
    console.log(`M dentro da função ${m}`);
  }

  console.log(`M dentro da função ${m}`);
}
escopoalinhado();
console.log(`M dentro da função ${m}`);



// 5 - Arrow functions

const soma = (a, b) => a + b;

console.log(soma(2, 3));

const array = [1, 2, 3, 4, 5];

const testeArrow = ()=> {
    console.log("Essa é uma arrow function");
}
testeArrow();

const parOuImpar = (n)=>{
    if( n % 2 === 0){
    console.log("Par");
    return;
}
console.log("Impar")
}
parOuImpar(2)

 

// 6 - mais sobre arrow function

const raizQuadrada = (x) =>{
    return x*x; 
}

console.log(raizQuadrada(4));

const raizQuadrada2 =(x) =>x*x;

console.log(raizQuadrada2(5));



// 7 - parametro opcional

const multiplcation = function (m,n){

    if(n === undefined){
        return m * 2;
    } else {
       return  m * n;
    }
}

console.log(multiplcation(5));

console.log(multiplcation(2,4));

const greeting = (name) =>{
    if(!name){
        console.log("Olá, visitante.");
        return;
    }
   console.log(`Olá ${name}`);
}

greeting();

greeting("João");

// 8 - Agurmento com default

const customGreeting = (name, great = "Olá") => {
   return `${great}, ${name}`;
};

console.log(customGreeting("João"));

console.log(customGreeting("João", "Bem-vindo"));



// 9 - Recursão

function fatorial(x) {
    if(x === 0){
        return 1;
    }else {
        return x * fatorial(x - 1);
    }

}

const num = 6;
const result = fatorial(num);
console.log(`O fatorial de ${num} é ${result}`);