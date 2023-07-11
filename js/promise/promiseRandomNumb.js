// https://jsonplaceholder.typicode.com/posts

const p = new Promise( (res, rej) => {
    setTimeout( () => {
        const numb = Math.random(0,10);

        if(numb < 5){
            res(numb);
        } else {
            rej(new Error(numb));
        }
    }, 1500)
});

p.then(

    function onresolve(value){
        // document.write(value);
        console.log(value);
    },

    function onerror(reason){
        // document.write(reason);
        console.log(reason);
    }
)



