let fs = require('fs');

function letturaFile(err, data){
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data);
    }

}

fs.readFile('test.txt', 'utf-8', letturaFile);



