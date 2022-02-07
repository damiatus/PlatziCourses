//--------------------------------//

//Esto no está funcionando, probar con metodo constructor
//--------------------------------//
/* let paises = {
    Chile: chile,
    //Peru: peru,
    //Brasil: brasil,
};

function salariosPaises(pais){
    this.salarios = pais;

};

let salariosPaisesSorted = {
    Chile: [],
    Peru: [],
    Brasi: [],
}; */

// paises.Chile == chile
// salariosChile == salariosPaises.Chile
/* function obtenerDatos(pais){
    let salariosPais = [];
    pais.forEach(function(persona){
        salariosPais.push(persona.salary);
    }); // Extraemos los salarios

    console.log(salariosPais);

    const salariosSorted = salariosPais.sort(
        function(salaryA, salaryB){
             return salaryA - salaryB;
        }); // Ordenamos los salarios
    
    console.log(salariosSorted);


} */
//--------------------------------------------------------//
const resultPos = document.getElementById("resultPos");

const inputSalary = document.getElementById("InputSalary");


const pais = document.getElementById("InputCountry");


/* function inPais(Pais){
    if (Pais.value == "Chile"){ 
    var inputPais = chile ; 
    console.log(inputPais);
    } else if (Pais.value == "Peru"){
    var inputPais = peru;
    console.log(inputPais);
    } else if(Pais.value == "Brasil"){
    var inputPais = brasil;
    console.log(inputPais);
    };  
}
inPais(pais); */

function calcularPos(){
    if (pais.value == "Chile"){ 
    var inputPais = chile ; 
    console.log(inputPais);
    } else if (pais.value == "Peru"){
    var inputPais = peru;
    console.log(inputPais);
    } else if(pais.value == "Brasil"){
    var inputPais = brasil;
    console.log(inputPais);
    }; 

    let salariosPais = [];
    inputPais.forEach(function(persona){
        salariosPais.push(persona.salary);
    }); // Extraemos los salarios

    console.log(salariosPais);

    const salariosSorted = salariosPais.sort(
        function(salaryA, salaryB){
             return salaryA - salaryB;
        }); // Ordenamos los salarios
    
    console.log(salariosSorted);

    

    var i=0;
    if (inputSalary.value < salariosSorted[0]){
    var porcentaje = 100;
    resultPos.innerText = "Tu salario en" +pais.value +" está en el top " + porcentaje + "%";

    }else{

    while (salariosSorted[i] < inputSalary.value){
        var i = i+1;
        var p= i+1;
        console.log("Este es p en =="+ p);
    }
    var p= i;
    console.log("Este es P "+p);

    while (inputSalary.value == salariosSorted[i]){
        var i = i+1;

    }
    var q= i;
    console.log("Este es q "+ q);

    var porcentaje = 100 - ((((q+p)/2)*100)/(salariosSorted.length));
    

    resultPos.innerText = "Tu salario en " + pais.value +" está en el top " + porcentaje + "%";

    }

};

//--------------------------------------------------------//
  /*   var datosOrigen = salariosOrigen.pais;

    datosOrigen.forEach(function(persona){
        datosOrigen.push(persona.salary);
        });

    salariosFinales.pais = datosOrigen.sort(
        function(salaryA, salaryB){
            return salaryA - salaryB;
        });
 */


//--------------------------------//
//Helpers (solo funcioan con un tipo de base de datos)




//########################################################//
// chile.forEach -> salariosChile -> salariosChileSorted

/* let salariosChile = [];

//Helpers

// Extrae cada salario de la base de datos
chile.forEach(function(persona){
    salariosChile.push(persona.salary);
    });

//Odena los datos obtenidos previamente

const salariosChileSorted = salariosChile.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    });

//Funcion principal
 
const resultPos = document.getElementById("resultPos");

const inputSalary = document.getElementById("InputSalary");
const inputPais = document.getElementById("InputCountry");


function calcularPos(){

var i=0;
    if (inputSalary.value < salariosChileSorted[0]){
    var porcentaje = 100;
    resultPos.innerText = "Tu salario en Chile está en el top " + porcentaje + "%";

    }else{

    while (salariosChileSorted[i] < inputSalary.value){
        var i = i+1;
        var p= i+1;
        console.log("Este es p en =="+ p);
    }
    var p= i;
    console.log("Este es P "+p);

    while (inputSalary.value == salariosChileSorted[i]){
        var i = i+1;

    }
    var q= i;
    console.log("Este es q "+ q);

    var porcentaje = 100 - ((((q+p)/2)*100)/(salariosChileSorted.length));
    

    resultPos.innerText = "Tu salario en Chile está en el top " + porcentaje + "%";



    }

};

 */