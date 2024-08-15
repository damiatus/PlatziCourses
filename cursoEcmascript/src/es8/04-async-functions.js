const fnAsync = () => {
   return new Promise((resolve, reject) => {
      (true)
         ? setTimeout(() => resolve('Async!!'), 2000) 
         //El "?" hace referencia al caso del resolve
         : reject(new Error('Error!'));
         //Los ":" hacen referencia al caso del reject
   })
}

const anotherFn = async () => {
   const something = await fnAsync();
   console.log(something);
   console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');