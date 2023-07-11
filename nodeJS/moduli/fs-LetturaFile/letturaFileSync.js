const fs = require('fs');

try{
    let data = fs.readFileSync('test.txt', 'utf-8');
    console.log(data)

}
catch(err){
    console.log("file non trovato");
}

// function letturaFile(err, data){
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log(data);
//     }

// }




