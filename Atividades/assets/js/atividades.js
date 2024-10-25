// 1. Crie uma variável que armazene seu nome e exiba no console.
let nome = "Seu Nome";
console.log(nome);

// 2. Crie duas variáveis, a e b, com valores numéricos, e exiba a soma delas.
let a = 5;
let b = 10;
console.log(a + b);

// 3. Crie uma variável idade e exiba uma mensagem "Você é maior de idade" se a idade for maior ou igual a 18.
let idade = 20;
if (idade >= 18) {
    console.log("Você é maior de idade");
}

// 4. Calcule o quadrado de um número e exiba o resultado.
let numero = 4;
console.log(numero * numero);

// 5. Escreva um código que converta uma temperatura de Celsius para Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

// 6. Verifique se um número é par ou ímpar.
let num = 7;
if (num % 2 === 0) {
    console.log("É par");
} else {
    console.log("É ímpar");
}

// 7. Crie uma função que receba um número e retorne seu valor absoluto.
function valorAbsoluto(num) {
    return Math.abs(num);
}
console.log(valorAbsoluto(-5));

// 8. Crie um código para verificar se um número é positivo, negativo ou zero.
let numeroVerificar = -3;
if (numeroVerificar > 0) {
    console.log("Positivo");
} else if (numeroVerificar < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 9. Crie uma variável nome e, se ela não estiver vazia, exiba "Olá, [nome]".
let nome2 = "Maria";
if (nome2) {
    console.log(`Olá, ${nome2}`);
}

// 10. Calcule a média de três números e exiba o resultado.
let num1 = 7, num2 = 8, num3 = 9;
let media = (num1 + num2 + num3) / 3;
console.log(media);

// 11. Escreva uma função que verifique se um ano é bissexto.
function isBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
console.log(isBissexto(2024));

// 12. Dada a idade de uma pessoa, exiba se ela é criança, adolescente, adulto ou idoso.
let idade2 = 15;
if (idade2 < 12) {
    console.log("Criança");
} else if (idade2 < 18) {
    console.log("Adolescente");
} else if (idade2 < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// 13. Verifique se uma letra é uma vogal ou uma consoante.
let letra = 'a';
if ('aeiouAEIOU'.includes(letra)) {
    console.log("É uma vogal");
} else {
    console.log("É uma consoante");
}

// 14. Escreva uma função que retorne o maior de dois números.
function maiorNumero(x, y) {
    return Math.max(x, y);
}
console.log(maiorNumero(10, 20));

// 15. Verifique se uma string contém a palavra "JavaScript".
let texto = "Estou aprendendo JavaScript";
console.log(texto.includes("JavaScript"));

// 16. Dada uma nota entre 0 e 10, exiba a classificação.
let nota = 8;
if (nota >= 9) {
    console.log("A");
} else if (nota >= 7) {
    console.log("B");
} else if (nota >= 5) {
    console.log("C");
} else if (nota >= 3) {
    console.log("D");
} else {
    console.log("E");
}

// 17. Verifique se um número é múltiplo de 3 e/ou de 5.
let numeroMultiplos = 15;
if (numeroMultiplos % 3 === 0) {
    console.log("Múltiplo de 3");
}
if (numeroMultiplos % 5 === 0) {
    console.log("Múltiplo de 5");
}

// 18. Escreva uma função que retorne o menor de três números.
function menorDeTres(x, y, z) {
    return Math.min(x, y, z);
}
console.log(menorDeTres(5, 2, 8));

// 19. Dada uma senha, verifique se ela tem pelo menos 8 caracteres.
let senha = "abc12345";
if (senha.length >= 8) {
    console.log("Senha válida");
} else {
    console.log("Senha inválida");
}

// 20. Verifique se um número está dentro de um intervalo (por exemplo, entre 10 e 20).
let numeroIntervalo = 15;
if (numeroIntervalo >= 10 && numeroIntervalo <= 20) {
    console.log("Está dentro do intervalo");
} else {
    console.log("Está fora do intervalo");
}

// 21. Exiba os números de 1 a 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 22. Exiba a tabuada do número 5.
let numTabuada = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
}

// 23. Calcule a soma dos números de 1 a 100.
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma);

// 24. Encontre todos os números pares entre 1 e 50.
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 25. Escreva uma função que exiba os n primeiros números da sequência de Fibonacci.
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
}
fibonacci(10);

// 26. Inverta uma string usando um loop.
let str = "JavaScript";
let strInvertida = "";
for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
}
console.log(strInvertida);

// 27. Dada uma array de números, exiba apenas os números pares.
let numeros = [1, 2, 3, 4, 5, 6];
for (let num of numeros) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 28. Encontre o maior número em um array.
let numerosArray = [5, 12, 3, 7, 10];
let maiorNum = numerosArray[0];
for (let num of numerosArray) {
    if (num > maiorNum) {
        maiorNum = num;
    }
}
console.log(maiorNum);

// 29. Verifique se um número é primo.
function isPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrimo(7));

// 30. Crie um loop que exiba a palavra "JavaScript" 10 vezes.
for (let i = 0; i < 10; i++) {
    console.log("JavaScript");
}

// 31. Crie uma função que receba um array e retorne a soma de seus elementos.
function somaArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(somaArray([1, 2, 3, 4]));

// 32. Verifique se um elemento está presente em um array.
let arr = [1, 2, 3, 4];
let elemento = 3;
console.log(arr.includes(elemento));

// 33. Crie uma função que inverta a ordem dos elementos de um array.
function inverteArray(arr) {
    return arr.reverse();
}
console.log(inverteArray([1, 2, 3, 4]));

// 34. Remova os valores duplicados de um array.
let arrayDuplicados = [1, 2, 2, 3, 4, 4, 5];
let semDuplicados = [...new Set(arrayDuplicados)];
console.log(semDuplicados);

// 35. Crie uma função que receba dois arrays e retorne a união deles.
function uniaoArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(uniaoArrays([1, 2], [2, 3]));

// 36. Encontre o índice de um valor específico em um array.
let arrayIndice = [5, 10, 15];
let valorIndice = 10;
console.log(arrayIndice.indexOf(valorIndice));

// 37. Crie uma função que retorne o segundo maior número de um array.
function segundoMaior(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];
}
console.log(segundoMaior([5, 2, 9, 1, 5]));

// 38. Concatene todos os elementos de um array em uma única string.
let arrayConcat = ['Olá', 'mundo', '!'];
console.log(arrayConcat.join(' '));

// 39. Dado um array de strings, retorne o array com todas as strings em maiúsculas.
let arrayStrings = ['ola', 'mundo'];
let maiusculas = arrayStrings.map(s => s.toUpperCase());
console.log(maiusculas);

// 40. Crie uma função que receba um array e retorne a quantidade de números ímpares.
function contagemImpares(arr) {
    return arr.filter(num => num % 2 !== 0).length;
}
console.log(contagemImpares([1, 2, 3, 4, 5]));

// 41. Crie um objeto que represente uma pessoa com propriedades nome, idade e cidade.
let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// 42. Adicione uma propriedade email ao objeto pessoa.
pessoa.email = "joao@example.com";

// 43. Crie uma função que receba um objeto e exiba suas propriedades e valores.
function exibePropriedades(obj) {
    for (let chave in obj) {
        console.log(`${chave}: ${obj[chave]}`);
    }
}
exibePropriedades(pessoa);

// 44. Verifique se uma propriedade existe em um objeto.
console.log('nome' in pessoa);

// 45. Crie uma função que calcule a média de idade de uma lista de pessoas.
function mediaIdade(pessoas) {
    let somaIdade = pessoas.reduce((acc, p) => acc + p.idade, 0);
    return somaIdade / pessoas.length;
}
console.log(mediaIdade([{ idade: 20 }, { idade: 30 }, { idade: 40 }]));

// 46. Dado um objeto com propriedades numéricas, retorne a soma de seus valores.
let objetoNumeros = { a: 10, b: 20, c: 30 };
let somaValores = Object.values(objetoNumeros).reduce((acc, val) => acc + val, 0);
console.log(somaValores);

// 47. Crie um objeto que represente um livro com propriedades título, autor e ano.
let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
};
console.log(`${livro.titulo} foi escrito por ${livro.autor} em ${livro.ano}.`);

// 48. Remova uma propriedade de um objeto.
delete livro.ano;

// 49. Crie uma função que verifique se uma pessoa pode dirigir (idade >= 18).
function podeDirigir(pessoa) {
    return pessoa.idade >= 18;
}
console.log(podeDirigir({ idade: 17 }));

// 50. Crie uma função que receba um objeto com informações de um produto e retorne uma string com o nome e o preço formatado.
function exibeProduto(produto) {
    return `${produto.nome}: R$ ${produto.preco.toFixed(2)}`;
}
console.log(exibeProduto({ nome: "Caderno", preco: 29.99 }));
