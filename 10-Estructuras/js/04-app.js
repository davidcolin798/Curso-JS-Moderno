const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;
const cheque = true;

// mayor que 
if (dinero>=totalAPagar) {
    console.log('si podemos pagar')
} else if(cheque){
    console.log('si podemos pagar con el cheque')
}else if(tarjeta){
    console.log('si puede pagar con tarjeta')
}else{
    console.log('fondos insuficientes')
}