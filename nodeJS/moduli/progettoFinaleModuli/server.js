const http = require('http')
const url = require('url')

function creaPrezzo(prezzoPrecedente){
    let valore = Math.round(prezzoPrecedente+(Math.random(10)*10-5))
    return valore>0?valore:1;
}

function caricaDati(res, nome, t){
    let nuovoPrezzo = Math.round(Math.random()*50+20);
    for(i=0; i<t-1; i++){
        nuovoPrezzo=creaPrezzo(nuovoPrezzo);
        res.write(`${nome}\t ${nuovoPrezzo}\n}`)

    }
    nuovoPrezzo=creaPrezzo(nuovoPrezzo);
    res.end(`${nome}\t ${nuovoPrezzo}\n}`);
}

const server = http.createServer((req, res) => {

    let query = url.parse(req.url).query
    if(query.n!=undefined && query.t!=undefined ){
        res.writeHead(200)
        caricaDati(res,query.t, query.n)
    }
    else{
        res.writeHead(400);
        res.end();
    }
}).listen('8080')


console.log(`server started at ${server.address().port}` )