const producto ={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true

}
const medidas ={
    peso : '1kg',
    medida:'1m'
}
//spread operator

const resultado = {...producto, ...medidas};