
//Forma tradicional

function newUser(name, age, country){
   var name = name || 'Oscar';
   var age = age || 34;
   var country = country || 'MX';
   console.log(name, age, country);
}
newUser();
newUser('David', 15, 'Co')


// Forma nueva
function newAdmin(name = 'Oscar', age =32, country = 'CL'){
   console.log(name,age,country);
}
newAdmin();
newAdmin('Ana', 23, 'P');


let json1 = {
   name: 'Oscar',
   car: 'Mercededs'
}
console.log(json1.name)