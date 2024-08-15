//Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b]= fruits;
console.log(fruits[0], fruits[1]); // Froma vieja
console.log(a, b); // Forma nueva


// Object destructuring

let user = {
   username: 'Oscar', 
   age: 34
};
console.log(user.username, user.age); // Forma tradiucional

let {username, age} = user; //Des estructuramos la información
console.log(username, age); // Forma nueva

// Spread operator

let person = {name: 'oscar', age:28};
let country = 'MX';

let data={id:1, ...person,  country}; // De esta forma se asignaron los valores de person al objeto de data
console.log(data);

//rest

function sum(num, ...values){ //en un futuro tendremos pa´rametro en ...vlaues
   console.log(values);
   console.log(num + values[0]);
   return num + values[0];

}
sum(1, 'A',2,3, 'cualquier párametro que queramos añadir')

//El primer pa´rametro es num y todo el resto se añaden a values