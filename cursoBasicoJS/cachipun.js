//Función para obtener un objeto aleatorio de un array

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

//Declaro mis variables a usar

var papel = "papel";
var tijera = "tijera";
var piedra = "piedra";
var jugadas = ["piedra", "papel", "tijera"];

//Declaro mi función

function cachipun(jugada){
    var jugadaPC = jugadas.sample(); //Al definir esta variable dentro de la fun ción, se llamará a la funcón sample() cada vez que juege de forma que jugadaPC vaya cambiando.
    
    if (jugada == jugadaPC) { console.log("Empate, jueguen de nuevo");
    } else if ((jugada==piedra && jugadaPC==tijera)||(jugada==papel && jugadaPC==piedra)||(jugada==tijera && jugadaPC==papel)){
        console.log("Ganaste! :)"); //Acá me pongo solo en los casos en los que puedo ganar
    } else {console.log("Perdiste :(")};
} 



//Mensaje bonito de presetnación

console.log("Bienvenidos al juego del cachipun");
console.log("Por favor, ingrese su jugada");

//Para jugar basta llamar a la función con la nuestra jugada
cachipun(prompt("ingrese su jugada"));


////////////////////////////////////////////////////////////////////////



Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

var papel = "papel";
var tijera = "tijera";
var piedra = "piedra";
var jugadas = ["piedra", "papel", "tijera"];

var jugadaPC = jugadas.sample();
console.log(jugadaPC);
var jugada = papel

switch (jugada){
 
    case jugadaPC:
        console.log("Empate, jueguen de nuevo");
        break;
    case piedra:
        switch (jugadaPC){
            case tijera:
                console.log("Ganaste! :)")
                break;
            default: 
                console.log("Perdiste :(")
        }
        break;
    case papel:
        switch (jugadaPC){
            case piedra:
                console.log("Ganaste! :)")
                break;
                
            default: 
                console.log("Perdiste :(")
        }
        break;
    case tijera:
        switch (jugadaPC){
            case papel:
                console.log("Ganaste! :)")
                break;
            default: 
                console.log("Perdiste :(")
        }
        break;
}
