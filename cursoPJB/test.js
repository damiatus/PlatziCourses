/* 
1- 
¿Qué es una variable y para qué sirve?

Es un elemento guardado en memoria que puede conener funciones, valores, listas, objetos, etc.

¿Cuál es la diferencia entre declarar e inicializar una variable?

Delcarar una varibale es decir que aquella vriable ahora existe. Inicializar es cuando se le asigna un valor a esa variable.

¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumas números e suna operación matemática donde el rsultado es la suma matemática de ambos. 
Concatenar strings es juntarlos de forma aledaña para crear un string mpas grande.

¿Cuál operador me permite sumar o concatenar? ´
El operador de suma normal +*/

3- Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

var nombre = "Juan";
var apellido = "Perez";
var usrPlatzi = "juancito2001"
var edad = 21;
var email = "juan.perez.chanchis@gmail.com"
var over18 = true;
var savings = 300000;
var debts = 50000;

4-
console.log(nombre + " "+apellido)
console.log(savings - debts)

Funciones:
¿Qué es una función?
Una operación que toma uno o más parámetros y realiza alguna operacón con el para luego retronar algún resultado.

¿Cuándo me sirve usar una función en mi código?
Cuándo quiero automatizar una acción.

¿Cuál es la diferencia entre parámetros y argumentos de una función?
El parámetro es lo que le ingresamos a la función. El argumento es lo que hay en el interior de l afunción, osea, su operación a realizar.


2- 

function saludar(){
      var nombre = prompt("Ingresa tu nombre");  
      var lastname = prompt("Ingresa tu apellido");
      var nickname = prompt("Ingresa tu nombre de usuario");

      console.log("Mi nombre es " + nombre + " "+ lastname + ", pero prefiero que me digas " + nickname + ".")
      
}

saludar()


Condicionales

¿Qué es un condicional?

Es una acción que se ejecuta si es que se cimple una cierta condición

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

if
else if
else
switch
functio ? casetrue : casefalse;
¿Puedo combinar funciones y condicionales?

por suopuesto!


function suscripcion(tipe){
   if (tipe == "Free"){
      console.log("Solo puedes tomar los cursos gratis");
   }  else if(tipe == "Basic") {
   console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipe == "Expert"){
   console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
   console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

}


function suscripcion(tipe){
   if (tipe == "Free"){
      return console.log("Solo puedes tomar los cursos gratis");
   }  if(tipe == "Basic") {
   return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}  if(tipe == "Expert"){
   return console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} if(tipe == "ExpertPlus") {
   console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
}


Ciclos:

1- 
¿Qué es un ciclo?
Es una acción que se repite mientras se cumpla una condición

¿Qué tipos de ciclos existen en JavaScript?

while
for
for of


¿Qué es un ciclo infinito y por qué es un problema?
Es un ciclo que no tiene una cpondición para terminar. Es un problema porque agota el espacio en memoria



¿Puedo mezclar ciclos y condicionales?

Obvio! Se puede hacer que cada vez que se ejecute un ciclo, su acción arealiar dependa de uno o más condicional.

2- 

function suma(i=0){

   while (i<5){
      console.log(i)
      i++
   }
};


function suma(resultado = prompt("Cuánto es 2 + 2?")){
   if (resultado == 4){
      alert("Felicidades! no eres estúpido!")
   } else {
      alert("Inténtalo denuevo maldito imbécil!")
      suma()
   }
}


Listas:

¿Qué es un array?
Es una lista que puede contener str, objetos, números y más listas

¿Qué es un objeto?
Es un elemento con un conjunto de carácterísticas propias de ese elemento


¿Cuándo es mejor usar objetos o arrays?
Objetos es si queremos almacenar carácterísticas de un mismo elemento. Array si queremos almacenar elementos no relacionados entre si.


¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si!


function primerParam(array1, i){
   if(i < array1.length){
      console.log(array1[i])
      i++
      primerParam(array1, i)
   }
   else{
      console.log("Fin")
   }
}