//--------------------------------//

//Esto no está funcionando, probar con metodo constructor
//--------------------------------//
let paises = {
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
};

// paises.Chile == chile
// salariosChile == salariosPaises.Chile
function obtenerDatos(pais){
    let salariosPais = [];
    pais.forEach(function(persona){
        salariosPais.push(persona.salary);
    });
    console.log(salariosPais);

    var salario = new salariosPaises(salariosPais);
    console.log(salario);


    const salariosSorted = salariosPais.sort(
        function(salaryA, salaryB){
             return salaryA - salaryB;
        });
    
    console.log(salariosSorted);



  /*   var datosOrigen = salariosOrigen.pais;

    datosOrigen.forEach(function(persona){
        datosOrigen.push(persona.salary);
        });

    salariosFinales.pais = datosOrigen.sort(
        function(salaryA, salaryB){
            return salaryA - salaryB;
        });
 */

}
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