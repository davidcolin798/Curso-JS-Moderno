const cliente = new Map();

cliente('nombre', 'karen');
cliente.add('tipo', 'premiuim');
cliente.add('saldo', 300);

console.log(cliente.size);

console.log(cliente.has('nombre2'));

console.log(cliente.get('nombre'));

cliente.delete('saaldo');

console.log(cliente.has('saldo'));

console.log(cliente.get('saldo'));

cliente.clear();

console.log(cliente);

const paciente = new Map([['nombre', 'paciente'],['cuarto', 'no definido']]);

paciente.set('dr', 'dr. asignado');
paciente.set('nombre', ' antonio');

console.log(paciente);

paciente.forEach((datos, index) =>{
    console.log(index);
    
})

