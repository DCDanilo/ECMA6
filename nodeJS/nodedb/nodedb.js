const mydb = require('mysql')

const conn = mydb.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: ''
    }
)

conn.connect(
    (err)=>{
        if(err){
            console.log(`${err}`)
        }
        else{
            console.log('connessione ok')
        }

    }
)