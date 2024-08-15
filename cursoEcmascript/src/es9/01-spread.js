const user = {username: 'gndx', age: 34, country: 'CO'};
//separamos el string en dos, el username y el rsto de los valores
const {username, ...values} = user;
console.log(username);
console.log(values);