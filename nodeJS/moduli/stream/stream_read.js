const fs=require('fs')

const readStream = fs.createReadStream('documento.pdf', {highWaterMark: 8*1024});

totale_letto = 0;

readStream.on('data', (chunk)=> {
    totale_letto +=chunk.length;

    console.log(`ho letto ${chunk.length} byte di dati`);
}).on('end', ()=>{

    console.log(`ho letto un totale di ${totale_letto} byte`);   
});