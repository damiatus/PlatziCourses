// enhaced object literals


function newuser(user, age, country, uId){
   // Esto es cuando queremos retornar un objeto y el nombre de cada variables es el mismo que la variable misma.
   return{
      user: user, //Forma tradicional
      age, // Object literals, no es necesario volver a nombrarlo
      country,
      id: uId, //podemos usar la forma normal
   }
}

console.log(newuser('gndx', 34, 'MX', 1));