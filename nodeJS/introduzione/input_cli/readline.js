var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('inserisci qualcosa: ');
rl.prompt();

rl.on('line', function(line){
    if(line.toLowerCase() === 'fine' ){
        rl.close();
    }
    console.log(line);
    rl.prompt();
})

rl.on('close', function(){
    console.log('fine sessione');
    process.exit(0);
} )