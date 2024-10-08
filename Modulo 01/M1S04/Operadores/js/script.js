
// 1 - Number 

console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Operações aritmeticas

console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);
console.log(5+(4*2));

//  Operações relacionais

console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);
console.log(5 == 3);


// 3 - Especial number


console.log(typeof Infinity); // Numero
console.log(typeof NaN);//Numero
console.log(Infinity + 1); //Infinity
console.log(0 / 0); // NaN
console.log(0 / "testo"); //NaN

// 4 - String


console.log("Hello");
console.log('Hello');
console.log(typeof "Hello World");
console.log("Hello World".length);
console.log("Hello World"[0]);
console.log("Hello World".toUpperCase());
console.log("Hello World".toLowerCase());

// 5 - Simbolos especiais em string

console.log("quebra\nlinha");
console.log("Hello\t TAB");
console.log("Hello\rWorld");
console.log("Hello\bWorld");
console.log("Hello\\World");

// 6 - Concatenação

console.log("Oi, " + " tudo" + " bem?");

// 7 - template Strings

console.log(`A soma de 2 + 2 é: ${2+2}` )

// 8 - Bollean

console.log(true);
console.log(false);
console.log(typeof true);
console.log(typeof false);
console.log(30 > 15);
console.log(30 < 15);



// 10 - Comparação

console.log(5 == 5);
console.log(5 === 5);
console.log(5 != 5);
console.log(5 !== 5);



//11- Operadores lógicos

console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true)
console.log(!false)
console.log(5>2 && 10 != 10)
console.log(5>2 || 10 != 10)



// 12 - empty values

console.log(null);
console.log(undefined);
console.log(0);
console.log("");
console.log(false);


// 13 - Mudanças de tipos

console.log(typeof 5 + "3");
console.log(5 + 3 + "3");
console.log(5 + 3 + "3");
console.log(String(5) + "3");