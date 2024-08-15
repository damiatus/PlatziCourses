/* const anotherFunction = () => {
   return new Promise((resolve, reject) =>{if (false){
      resolve('Si funcionó :)');
   } else {
      reject('No funcionó :(');
   }
})
}

anotherFunction()
   .then(response => console.log(response))
   .catch(err => console.log(err)); */

/* -------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------- */


   /* Primero que todo, acá tenemos varias cosas en paralelo asociadas a asincronismo */

   /* Tenemos la función cuadradoPromimse que resive un valor y genera una promesa, osea que en algpun momento retornará algo a partir del valor entregado */

function cuadradoPromise(value){
   /* En caso de que la promesa se resulva de manera correcta, devuelve la instrición del return, en caso contrario, la del reject */
   return new Promise((resolve, reject) => {
      /* En este caso se usa setTimeout como la promesa a ejecutar. 
      SetTimeout que es otro atributo del asincronismo el que devuelve alfgo depsués de un tiempo, en este caso devuelve el resolve */
      setTimeout(() => {
      /* Vemos que después de pasado el tiempo del setTiemout se devuelve el resolve que es un objeto que contiene a value y a result= value*value. En caso de fallar la promesa, osea que no funcione el setTimeout, devuelve el reject pero no lo definimos en este ejemplo*/
         resolve({
            value,
            result:value*value
         });
      }, 0|matchMedia.random()*1000); /* Esto es simplemente que el tiempo de espera del setTiemout sea random entre 0 y 1000 milisegundos */
   });
}

/* Acá podemos ver otra componente del asincronismo que podemos usar. Es concatenar la salida de una función ejecutada correctamente (osea su resolve) como input a otra función.  */

/* En este caso vemos como se llama a la funci+on cuadradoPrimise con el valor 0 como input. Luego, si se ejecuta correctamente, dicha función restornará con el resolve que como vimos, es un objeto de dos valores  */
cuadradoPromise(0)

/* Entonces, si la función cuadradoPromise(0) se ejecuta correctamente, el resolve entrará en la función then, siendo "obj" el resolve de cuadradoPrimise */
   .then((obj)=> {
      console.log('inicio Pormise');
      console.log('Proimise: ${obj.value}. ${obj.result}');
   })

   /* Por último, si la prosea no se resuleve satisfacotriamente, osea que cuadradroPrimise(0) retorna con un reject, se ejectura lo que se diga en catch. Es como un then pero para el caso de que la promsea se rechace. */
   .catch();