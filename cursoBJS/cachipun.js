

var computadora

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



function computadora(jugada){
   if (jugada === 0){
      return "piedra"
   } else if (jugada === 1){
      return "papel"
   } else {
      return "tijera"
   }
}





function cachipun(jugadaUSR){

   computadora1 = computadora(getRandomInt(3))
   
   switch (jugadaUSR){
      case computadora1:{
         console.log("Empate")
         break
      }
      case "piedra":{
         if (computadora1 === "tijera"){
            console.log("Ganaste")
         } else {console.log("perdiste")}
         break
      }
      case "papel":{
         if (computadora1 === "piedra"){
            console.log("Ganaste")
         } else {console.log("perdiste")}
         break
      }
      case "tijera":{
         if (computadora1 === "papel"){
            console.log("Ganaste")
         } else {console.log("perdiste")}
         break
      }
   }
   }


function cachipun(jugadaUSR){
   computadora1 = computadora(getRandomInt(3))

   if (jugadaUSR === computadora1) {
      console.log("Empate")
   } else if ((jugadaUSR==="piedra" && computadora1==="tijera")||(jugadaUSR==="papel" && computadora1==="piedra")||(jugadaUSR==="tijera" && computadora1==="papel"))
   {
   console.log("Ganaste! :)");
   } else {console.log("Perdiste :(")}
}

cachipun("tijera")