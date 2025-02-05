const meses = ['enero', 'febrero', 'marzo','abril', 'mayo', 'junio', 'julio'];
const meses2 = ['agosto', 'septiembre'];
const meses3 = ['octubre', 'noviembre', 'diciembre'];

const resultado = meses.concat(meses2);
console.log(resultado);

const resultado2 = [...meses, ...meses2];
console.log(resultado2);