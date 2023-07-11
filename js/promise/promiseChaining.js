// function makeGETRequest(at) {
//     return new Promise( (res, rej) => {

//         const req = new XMLHttpRequest();

//         req.onload = function() {
//             res(this.responseText);
//         };

//         req.onerror = function() {
//             rej(new Error('Fail !'));
//         };

//         req.open(at);

//         req.send();    

//     });
// }

// function main(){
//     makeGETRequest('https://jsonplaceholder.typicode.com/posts')
//     .then(
//         (res) => {
//             console.log(res)
//         },

//         (rej) => {
//             console.log(rej)

//         }
//     )
// };

// main();


const p = new Promise((resolve, reject) => {
	resolve(10);
});

p.then(v => {
  	p.then(v => {
    	console.log(v+1);
    });
});
  

p.then(v => {
    console.log(v+2);
});
