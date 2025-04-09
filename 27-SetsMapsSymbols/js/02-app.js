//WeakSet

const weakset = new WeakSet();

const cliente = { 
    nombre: 'davis',
    saldo:100
}

weakset.add(cliente);

console.log(weakset.has(cliente2));

weakset.delete(cliente);

console.log(weakset);

