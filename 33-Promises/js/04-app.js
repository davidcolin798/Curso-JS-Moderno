const  paises = [];

const nuevoPais = pais => new Promise(resolve =>{
    setTimeout(() => {
        paises.push(pais);
        resolve('el resultado del resolve')
    }, 3000);
} )

nuevoPais('alemania')
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('francia')
    })
    .then(resultado =>{
        console.log(resultado);
        console.log(paises);
        return nuevoPais('mexico')
    })
    .then(resultado =>{
        console.log(resultado);
    })