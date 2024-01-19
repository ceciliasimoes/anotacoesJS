//Programa para calcular preço de viagem
/* 3 variáveis: preço combustível, gasto do carroo por km e distância, preco etanol e tipo de comustivel no carro*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
let tipoDeCombustivel = 'gasolina';
const kmPorLitro = 10;
var kmViagem = 100;
var precoFinal;
var consumoViagem = kmViagem/kmPorLitro;

if(tipoDeCombustivel === 'gasolina'){
    precoFinal = precoGasolina * consumoViagem;
} else if(tipoDeCombustivel === 'etanol'){
    precoFinal = precoEtanol * consumoViagem;
} else{
        console.log('O tipo do combustível não é válido!')
}

console.log(`O preço do comutível da viagem é da viagem ${precoFinal.toFixed(2)} `);// transforma um numero em string e limita as casas decimais
