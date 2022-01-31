
//-----------Variables y operaciones--------------
// P1:
//1-Una variables es un elemento de JavaScript que puede contener Strings, Números, Arrays u Objetos.
//2-Declarar una variable es crearle e inicializarla es cuando se le asocia un valor.
//3-Sumar números es suma matemática, concatenar es poner uno delante del otro.
//4-Operador suma +

//P2 y P3:

var nombre = "Roberto"; //String
var apellido = "Bolaños"; //String
var nombreUsuario = "RobertoBolaños"; //String
var edad = 35; //Integer
var correo = "roberto.bolaños@gmail.com"; //String
var mayorEdad = true; //Booleano
var dineroAhorrado = 1000000; //Integer
var deudas = 10000; //Integer


//P4

var nombreApellido = nombre + " " + apellido;
console.log(nombreApellido);

var dineroReal = dineroAhorrado - deudas;
console.log (dineroReal);

//-----------------Funciones-----------------

//P1
//Son un conjunto de sentencias que utilizamos par generar acciones con los valores guardados previamente en las variables.

//Cuando queremos crear una herrmaienta que actúe de una ceirta manera

//El parámetro es lo que sua la función y el arguimenmto es lo que harpá con el parámetro.

//P2
var datos = {
    name: "Juan David",
    lastname: "Castro Gallego",
    nickname: "juandc",
    completeName: function(){
        return `${this.name} ${this.lastname}`;
    }
    
};

datos.completeName();
datos.name


function nombres(info){
    console.log(`Mi nombre es ${info.completeName()}, pero prefiero que me digas ${info.nickname}.`)
};

nombres(datos)

//---------------Condicionales---------------------
//P1

//1- Son instrucciones para que una función ejecute unas ciertas acción si es que una ciertas condición es (o no) cumplida. 
//2- if: Se usa como la priumera condición de la función
//  else if: Se usa como las condiciones que sigue del primer if si es que dicho if no se cumple.
//  else: Se usa para dar la instrucción de que hacer si nunguna de las condiciones anteriorees son cumplidas.
//   Operador ternario: es una forma de hacer una función con condiocnes en una misma linea en donde en la misma se indica la condicion a ser cumplida, que hacer si dicha condicion se cumple y que hacer en caso de que no.

//3- Si se puede

//P2

const tipoDeSuscripcion = "Basic";

function suscripcion(usuario){
    if (usuario == "Free") {console.log("Solo puedes tomar los cursos gratis");
    } else if (usuario == "Basic"){console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
    } else if (usuario == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }else if (usuario == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }else {"Ingrese un plan válido"};
}

suscripcion(tipoDeSuscripcion);

//P3

const tipoDeSuscripcion = "Basic";

function suscripcion(usuario){
    if (usuario == "Free") {console.log("Solo puedes tomar los cursos gratis");
    } if (usuario == "Basic"){console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
    } if (usuario == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } if (usuario == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}

suscripcion(tipoDeSuscripcion);


//-------------------------Ciclos--------------------

//P1
//1- Es una acción que se repite ciclicamente mientras una condicipón dada se cumpla.
//2- Ciclo While, For y For of
//3- Es un ciclo en donde nunca se cumple una condición de parada. Es un problema yua que llena la memoria ram.
//4- si se puede.

//P2

var i=0

while (i<5){
    console.log("El valor de i es: " + i);
    var i= i+1;
}


var i=10

while (i>=2){
    console.log("El valor de i es: " + i);
    var i= i-1;
}

//P3


function suma(){
    if (prompt("¿Cuanto es 2+2?") == 4) {console.log("Felicidades, respuesta correcta!");
    } else {console.log("Respuesta incorrecta :(");
    return suma();
}
}

suma()

//----------------------Listas----------------
//P1
//1- Es una lista ya sea de strings, integers u objetos
//2- Es una estructura de datos que contiene distitnos tipos de datos en su interior
//3- Un array se usa cuando uno uiere hacer una lpñista de ujn solo tipo de datps. El objeto cuando son difernets tipos de datos.
//4-Si.

//P2

lista = ["manzana", "auto", "moneda"];
function primer(a){
    console.log(a[0]);
}

primer(lista)

//P3
lista = ["manzana", "auto", "moneda"];

function listado(array){
    for(let i = 0 ; i < array.length ; i++){
     console.log(array[i]);
}

}

listado(lista)

//P4

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
}

function imprimir(objeto){
    Object.values(objeto).forEach(elemento => console.log(elemento))
}

imprimir(miAuto)








