const notas = [10, 6.5, 8, 7.5];

let SomaDasNotas = 0;

for (let indice=0; indice < notas.length; indice++){
    SomaDasNotas += notas[indice];
}

const media = SomaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);