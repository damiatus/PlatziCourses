let salariosChile = [];

//Helpers
chile.forEach(function(persona){
    salariosChile.push(persona.salary);
    });

const salariosChileSorted = salariosChile.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//Funcion principal

const inputSalary = document.getElementById("InputSalary").value;
const inputPais = document.getElementById("InputCountry").value;


function calcularPos(){




    resultPos.innerText = "Tu posicion en Chile? Latama? es con descuento es top " + posicionPais + "%";
};

