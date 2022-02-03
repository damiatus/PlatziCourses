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

    while (inputSalary.value > salariosChileSorted[i]){
        var i=i+1;
    }

    var porcentaje = 100- ((i*100)/salariosChileSorted.length);

    resultPos.innerText = "Tu salario en Chile está en el top " + porcentaje + "%";
};


//Añadir el sueldo al array de salarios y con search ver en que posicion está dicho sueldo para luego comparar ese indice con el length del array completo.
//Ir comparando tu posicion con la de los demas, si es mayor suma uno, si no devuelve el numero, dicho numero es el indice de donde irira su salario. Luego se saca a que porcentaje equivale dicho número ocn respecto a chile.length.
