const fetch = require('node-fetch-commonjs');

async function getUser(id) {
    
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await response.json();
        return data;
    } catch(error) {
    
        throw new Error('Не удалось получить данные от сервера')
    }
}

async function main() {
    try {

        let user = await getUser(1);
        console.log(user)
    
    } catch(error) {
    
        console.log(error);
    }
}

main();


