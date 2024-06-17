// function connectTodb(){

//     const {Client} = require('pg');

//     const client = new Client({
//         host: '127.0.0.1',
//         port: 5432,
//         user: 'postgres',
//         password: 'rootroot',
//         database: 'triviapg_db'
//     });
    
//     client.connect()
//     .then(() => console.log('Connected to our Database'))
//     .catch((err) => {'error in connection',err.stack});

// }

// module.exports = connectTodb;