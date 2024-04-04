async function hello() {
    return 'Hello';	
}

function world() {
    return 'World';
}

const hallo = hello().then((result) => {
    console.log('then:', result);
})
const wereld = world();
console.log(hallo);
console.log(wereld);