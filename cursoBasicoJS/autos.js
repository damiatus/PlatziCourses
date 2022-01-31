

//Creamos la función constructora

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio=annio;
}

var autos = []; //Se define como un array vacío para que aloje a cada auto que son objetos.

for(let i = 0 ; i < 3 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio)); //Con push se añade un nuevo elemento al array autos, dicho auto es definido con la función cosntructora.
}

//Esta función simplemente imprime todos los elemntos del array de autos

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
} 