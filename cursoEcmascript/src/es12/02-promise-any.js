const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

// Entregará la primera promesa que se resuelva, en este caso es la segunda ya que la primera entrega reject.