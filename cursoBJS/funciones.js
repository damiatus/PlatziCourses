

//Funciones declarativas: Función no anómnmima
      // SI tiene hoisting


function miFuncion(){
   return 3;
}

miFuncion();

//Función de expresion: Variables que guardan una función en su interior. La función al interior de la variable es anónima, no tiene nombre.
   // No tieen hoisting

var miFuncion = function(a,b){
   return a + b;
}

miFuncion();

//Ejemplo

function saludarEstudiantes(estudiantes){
   console.log("Hola ${estudiante}")
}


function sumar(a,b){
   return a + b;
}

sumar (a,b)


// El hoisting es que podemos llamar a una función y definirla más abajo