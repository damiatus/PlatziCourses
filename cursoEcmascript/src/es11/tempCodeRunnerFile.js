const promise1 = new Peomise((resolve, reject) => reject("Reject"));
const promise2 = new Primise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

Promise.allSettled([promise1, promise2, promise3])
   .then(response => console.log(response));