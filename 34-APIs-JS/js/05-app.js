document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('La pestaña está visible');
    } else {
        console.log('La pestaña está oculta');
    }
});