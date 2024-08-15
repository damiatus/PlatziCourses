const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

Promise.allSettled([promise1, promise2, promise3])
   .then(response => console.log(response));

   //El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada. 

   //La diferencia con Promise.allSettled() 
   // Ejecuta todas las promesas sin importar si son rechazadas o no.