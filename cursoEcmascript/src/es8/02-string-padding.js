const string = 'Hello';

console.log(string.padStart(10, '_')); //Añade el guión antes de Hello hasta completar 10 carácteres en total. Si se le pone un largo igual o menor al string otihinal 'Hello', no se añaden carácteres.

console.log(string.padEnd(10, '_')); //Lo mismo pero al final