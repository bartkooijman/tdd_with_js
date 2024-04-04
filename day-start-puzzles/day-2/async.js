const https = require('https');

function fetch(path) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'jsonplaceholder.typicode.com',
            path: path,
            method: 'GET'
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    console.log(JSON.parse(data));
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`Request failed with status code ${res.statusCode}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}



async function fetchSomeUrls() {
    const data1 = await fetch('/todos/1');
    const data2 = await fetch('/todos/2');
    const data3 = await fetch('/todos/3');

    console.log(data1);
    console.log(data2);
    console.log(data3);
}

fetchSomeUrls();