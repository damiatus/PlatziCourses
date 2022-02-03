let salariosChile = [];

//Helpers
chile.forEach(function(persona){
    salariosChile.push(persona.salary);
    });

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

