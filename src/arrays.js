const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
});

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
});

console.log(alunos2);

/*const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    return numeroAtual * 2;
});

console.log(dobroDosNumeros);*/

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'; // true ou false
});

console.log(paula);

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paulo'; // true ou false
});

console.log(indiceDaPaula);

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
});

//every
const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend';
});

console.log(todosAlunosSaoDeFrontend);

const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend';
});

console.log(existeAlgumAlunoDeBackend);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}

const filtraAlunosDeBackend2 = (aluno) => aluno.curso === 'Backend';

const alunoDeBackend = alunos2.filter(filtraAlunosDeBackend);

console.log(alunoDeBackend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0);

console.log(soma);

let somaComFor = 0;

for(let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome}`;
    return acumulador;
}, '');

console.log(nomesDosAlunos);

