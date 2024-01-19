function nomeFuncao(){
    console.log('teste');
}

nomeFuncao();

function sayMyName(name){// é um procedimento pois n retorna valor
    console.log(`Seu nome é ${name}`);
}
sayMyName('Ana');

function quadrado(valor){// é uma função pois retorna valor
    return valor * valor;
}

const quadradoDeDez = quadrado(10);//passando valores
console.log(quadrado(20));