//1
// so Deus na causa rsrs
function fatorial(numero) {
    if (numero < 0) {
        return "nao funciona para numeros negativos";
    }

    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log("o resultado é")
console.log(fatorial(8));
console.log(fatorial(5))
//2
function dobrar_numeros_Pares(numeros) {
    return numeros
        .filter(numero => numero % 2 === 0)  
}


const numer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
console.log(dobrar_numeros_Pares(numer));  
//3
function resultado_final(alunos) {
    alunos.forEach(aluno => {
        const status = aluno.nota >= 7 ? 'Aprovado' : 'Reprovado';
        console.log(`${aluno.nome}: ${status}`);
    });
}
const alunos = [
    { nome: 'Alexandre', nota: 10},
    { nome: 'Victoria', nota: 10},
    { nome: 'Anderson', nota: 4}
];

resultado_final(alunos);

//4

function somar_itens(numeros) {
    return numeros.reduce((soma, numero) => soma + numero, 0);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(somar_itens(numeros)); 



//5
function somar(matriz) {
    let soma = 0;

    
    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}
const matriz = [
    [10, 30, 15],
    [14, 100, 20],
    [100, 25, 75]
];

console.log(somar(matriz));