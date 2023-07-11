// https://jsonplaceholder.typicode.com/posts

const p = new Promise( (res, rej) => {

    const oReq = new XMLHttpRequest();

    oReq.onload = function() {
        res(this.responseText);
    }

    oReq.onerror = function() {
        rej(new Error("Fail"));
    }

    oReq.open( 'GET', 'https://jsonplaceholder.typicode.com/posts' );

    oReq.send();
})



