const ciudades = ['londres','new york','cdmx','paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();

datos.set('nombre', 'david');
datos.set('profesion', 'desarrollo web');

// DEfault
for (let ciudad of ciudades) {
    console.log(ciudad);   
}

for (let orden of ordenes) {
    console.log(orden);   
}

for (let dato of datos) {
    console.log(dato);   
}


// keys interator
for (let keys of ciudades.keys()) {
    console.log(keys);   
}

for (let keys of ordenes.keys()) {
    console.log(keys);   
}
for (let keys of datos.keys()) {
    console.log(keys);   
}

// Values iterator
for (let entry of ciudades.entries()) {
    console.log(entry);   
}

for (let entry of ordenes.entries()) {
    console.log(entry);   
}
for (let entry of datos.entries()) {
    console.log(entry);   
}
//Entries iterator

for (let entry of ciudades.entries()) {
    console.log(entry);   
}

for (let entry of ordenes.entries()) {
    console.log(entry);   
}

for (let entry of datos.entries()) {
    console.log(entry);   
}