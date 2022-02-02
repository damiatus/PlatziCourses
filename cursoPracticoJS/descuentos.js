//const precioOriginal = 120;

//const descuento = 18; //En %

//const porcenetajePrecioSinDescuento
/* const porcentajePrecioConDescuento = 100 - descuento;


const precioConDescuento  = precioOriginal- precioOriginal * (descuento/100);

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
} ) */

const resultPrice = document.getElementById("resultPrice");

const cupones = ["15DESCOTOÑO", "20DESCOTOÑO", "25DESCOTOÑO"];

function calcularPrecioConDescuento(){
    const inputPrecio = document.getElementById("InputPrice");
    const inputCupon = document.getElementById("InputCupon");

    if (!cupones.includes(inputCupon.value)) {
    alert("El cupón " + inputCupon.value + "no es válido");
    } else if (inputCupon.value === "15DESCOTOÑO") {
   descuento = 15;
    } else if (inputCupon.value === "20DESCOTOÑO") {
   descuento = 20;
    } else if (inputCupon.value === "25DESCOTOÑO") {
   descuento = 25;
    }

    const precioConDescuento  = inputPrecio.value- inputPrecio.value * (descuento/100);

    resultPrice.innerText = "Tu precio con descuento es $" + precioConDescuento;
}








