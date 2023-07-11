const http = require('http');
const options = {
    hostname: 'info.cern.ch',
    method: 'GET'
}

const request = http.request(options, (response) => {
    if(response.statusCode<300 && response.statusCode>=200){
        response.on('data', (y) => {
            process.stdout.write(y);
        })
    }
    // else {
    //     console.log(response.statusCode);
    // }
})

// .on('error', (e) => {
//     console.log(`errore codice ${e}`);
// });