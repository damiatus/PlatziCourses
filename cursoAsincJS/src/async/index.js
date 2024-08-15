//La promesa lo que hace es indicar que en algún momento retornarpa algo, en este caso después de 2 segundos pero podría ser después de una cierta acción.

const fnAsync = () => {
   return new Promise((resolve, reject) =>{
      (true)
      ? setTimeout(()=> resolve('Asunc!'), 2000)
      : reject(new Error('Error!'));
   })
}

// el await espera a que se cumpla la promesa que llama, en este caso fnAsync
const anotherFn = async () => {
   const something = await fnAsync();
   console.log(something);
   console.log('Hello');
}

console.log('Before');
anotherFn();
console.log('After');
