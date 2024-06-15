const {Client} = require('pg');
const fs = require('fs');
const path = require('path');


function makeDB(){


    const schemaPath = path.join(__dirname,'schema.sql');
    const schema = fs.readFileSync(schemaPath,'utf8');
    
    const client = new Client({
        user:'postgres',
        host:'localhost',
        password:'rootroot',
        port: 5432
    });
    
    client.connect(async (err) =>{
    
        if(err){
            console.error('could not load pSQL DB',err);
            return;
        }
        console.log('connect to pSQL');
    
        try{
            await client.query('CREATE DATABASE trivia1_db');
            console.log('DB was created')
        }
        catch(error){
            if(error.code === '42P04'){
                console.log('Database already exists');
            }
            else{
                console.error('Error in trying to create DB',error);
                client.end();
                return;
            }
        }
    })


}

module.exports = {makeDB}