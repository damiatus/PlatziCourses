//Delcarando
//   class User {};


//instancia de una clase
//   const newUser = new User();

class user {
   //metodos
   greeting(){
      return 'Hello';
   }
};

const gndx = new user(); //creamos un elemento "gndx" que pertenece a la lase user

console.log(gndx.greeting()); //Como gndx es de clase user, podemos acceder al método de greeting propio de la lase user.

const developer = new user();
console.log(developer.greeting());


//Cponstructor

class user {
   //constructor

   // acá lo que está pasando es que como no hay un return sinó que está puest directamente el console log, ese método se ejecuta inmediatamente para cada nuevo elemento añadido a la clase
   constructor(){
      console.log("Nuevo Usuario");
   }
   greeting(){
      return 'Hello';
   }
}

//En este caso al añadirse el elelemtno david a la alse user, se ejecuta el método constructor

const david = new user();


//this
//Hace referncia al elemento padre que lo contiene

class user {
   constructor(name) {
      this.name = name;
   }
   //métodos
   speak(){
      return 'Hello';
   }
   greeting(){
      return `${this.speak()} ${this.name}`;
   }
}

const ana = new user('Ana');
console.log(ana.greeting());


//setters and getters

class user{
   //constructor
   constructor(name, age){
      this.name = name;
      this.age = age;
   }
   //metodos
   speak() {
      return 'Hello';
   }
   greeting(){
      return `${this.speak()} ${this.name}`;
   }

   get uAge(){
      return this.age;
   }
   set uAge(n){
      this.age = n;
   }
}

const developer1 = new user('David', 15);
console.log(developer1.uAge); //muestra la edad
console.group(developer1.uAge = 20);
