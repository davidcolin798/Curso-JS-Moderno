const metodoDePago = 'efectivo';

switch (metodoDePago) {
    case 'efectivo':
        efectivo();
    break;
    case 'cheque':
        console.log(`Pagaste con ${metodoDePago}`);    
        break;
     case 'tarjeta':
        console.log(`Pagaste con ${metodoDePago}`);    
        break;
    default:
        console.log('aun no has seleccionado ningun metodo de pago o el metodo de pago no es valido');
        break;
}
function efectivo(){
    console.log(`pagando con ${metodoDePago}`);
}