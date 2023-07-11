const fs=require('fs')

const nomi_persona = [
    'adriano',
    'giovanni',
    'giacomo',
    'aldo',
    'andrea',
    'giuseppe'
];

const cognomi = [
    'pappalardo',
    'storti',
    'poretti',
    'baglio',
    'ruscitti',
    'zou'
];

function nomeRandom(){
    nome = nomi_persona[Math.floor(Math.random()*nomi_persona.length)];
    cognome = cognomi[Math.floor(Math.random()*cognomi.length)];

    return `${nome} ${cognome}\n`;

}

const write_stream = fs.createWriteStream('nomi.txt');

for(i=0; i<50; i++){
    write_stream.write(nomeRandom());
}

write_stream.end('fine script');
