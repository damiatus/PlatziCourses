// Primero hacer la lista de las marcas, luego de los modelos y luego de los años

//Crear una función constructora para crear objetos auto

//Crear un loop para que tome el primero de la lista de marca, modelo y año y genere un auto con eso

// Duda: Como cambiamos el nombre de cada nueva variable?


var autos = [];
function auto(marca, modelo, annio){
   this.marca = marca;
   this.modelo = modelo;
   this.annio = annio;
}



for(var i=0; i<5; i++){
   var estaMarca = prompt("Ingresa la marca del auto");
   var esteModelo = prompt("Ingresa el modelo del auto");
   var esteAño = prompt("Ingresa el año del auto");

   var auto1 = new auto(estaMarca, esteModelo, esteAño);
   autos.push(auto1)
   console.log(autos[i])
}
