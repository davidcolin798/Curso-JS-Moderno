// curring and parcials

const suma = (a,b,c) => a + b + c;

const parcial = a => b => c => suma(a,b,c);

const resultadoParcial = parcial(3)(4)(8);

console.log(re);
