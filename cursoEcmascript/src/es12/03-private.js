
//setters and getters

class user{
   //constructor
   constructor(name, age){
      this.name = name;
      this.age = age;
   }
   //metodos
   #speak() { //al añadirle el # se convierte en un método privado que solo se puede acceder desde dentro de user
      return 'Hello';
   }
   greeting(){
      return `${this.speak()} ${this.name}`;
   }

   get #uAge(){
      return this.age;
   }
   set #uAge(n){
      this.age = n;
   }
}

const developer1 = new user('David', 15);
console.log(developer1.uAge); //muestra la edad
console.group(developer1.uAge = 20);
