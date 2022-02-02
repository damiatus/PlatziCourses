const precioOriginal = 120;

const descuento = 18; //En %

//const porcenetajePrecioSinDescuento
const porcentajePrecioConDescuento = 100 - descuento;


const precioConDescuento  = precioOriginal- precioOriginal * (descuento/100);

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
} )

function calcularPrecioConDescuento(precio,descuento){
  //  const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento  = precio- precio * (descuento/100);

    return precioConDescuento;
}