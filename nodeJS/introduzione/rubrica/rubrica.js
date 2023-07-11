let rl = require('readline');

let response = rl.createInterface(process.stdin, process.stdout);


let menu = [
    'Nuovo Contatto',
    'Stampa Rubrica',
    'Ricerca',
    'Esci da Rubrica'
];

let rubrica = [
    "Antonio Rossi 347-6385572",
    "Giuseppe Verdi 347-6385571",
    "Mauro Neri 347-6385573",
    "Selene Ruscitto 320-6385573",
    "Solaire D'Astoria 327-6234473"
]

function avvio(){
    let index="1";
    console.log('\n\nOpzioni Rubrica');

    menu.forEach(x => console.log(`${index++} - ${x}`));
    response.question('Scelta: ',scegliOpzione);

}


function scegliOpzione(res){
    switch(res){
        case '1':
            addContatto()
            break;
        case '2':            
            stampaRubrica();           
            break;
        case '3':
            searchContatto()
            avvio();
            break;
        case '4':
            console.log('\nEsci da Rubrica');
            process.exit();
            break;
        default:
            console.log('immetti un numero da 1 a 4')
            avvio();
    }
}

function stampaRubrica(){
    console.log('\nContatti: ');
    rubrica.forEach(contatto => console.log(`${contatto}`));
    avvio();
}

function addContatto(){
    response.question('Contatto: ', contatto=>{
        rubrica.push(contatto);
        avvio();
    })
}

function searchContatto(){
    response.question('\nCerca contatto: ', contatto => {
        rubrica.forEach(voce => {
            if(voce.toLowerCase().indexOf(contatto.toLowerCase())!==-1){
                console.log(`${voce}`);
            }
        })
        avvio();
    })

}


//Menu applicazione
// avvio();

// console.log('CaSTAgna'.toUpperCase().indexOf('A'));

// let nome = 'arrigo';
// let cognome = 'sacchi';

// stringa = `$nome $cognome`;

// console.log(stringa);

let res = 0;
let valore = 2;

switch(valore){
    case 1:
        res=3;
    case 2:
        res=4;
    case 3:
        res=5;
}

console.log(res);