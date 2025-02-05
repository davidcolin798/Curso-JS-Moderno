window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top = 780) {
        console.log('el elemento ya esta visible');
        
    }else{
        console.log('el elemento no es visible scrollea mas');
    }
})