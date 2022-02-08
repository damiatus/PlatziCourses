
const resultPos = document.getElementById("resultPos");

const inputSalary = document.getElementById("InputSalary");


const pais = document.getElementById("InputCountry");

function calcularPos(){
    //Definimos cual es el pais que vamos a trabajar 
    if (pais.value == "Chile"){ 
    var inputPais = chile ; 
    
    } else if (pais.value == "Peru"){
    var inputPais = peru;
    
    } else if(pais.value == "Brasil"){
    var inputPais = brasil;
    
    }; 

    let salariosPais = [];
    inputPais.forEach(function(persona){
        salariosPais.push(persona.salary);
    }); // Extraemos los salarios

   // console.log(salariosPais);

    const salariosSorted = salariosPais.sort(
        function(salaryA, salaryB){
             return salaryA - salaryB;
        }); // Ordenamos los salarios
    
    //console.log(salariosSorted);

    

    var i=0;
    if (inputSalary.value < salariosSorted[0]){
    var porcentaje = 100;
    resultPos.innerText = "Tu salario en " +pais.value +" está en el top " + porcentaje + "%.\nEstás en el "+ porcentaje +"% que más gana.";

    }else{

    while (salariosSorted[i] < inputSalary.value){
        var i = i+1;
        var p= i+1;
        //console.log("Este es p en =="+ p);
    }
    var p= i;
   // console.log("Este es P "+p);

    while (inputSalary.value == salariosSorted[i]){
        var i = i+1;

    }
    var q= i;
    //console.log("Este es q "+ q);

    var porcentaje = 100 - ((((q+p)/2)*100)/(salariosSorted.length));
    

    resultPos.innerText = "Tu salario en " +pais.value +" está en el top " + porcentaje + "%.\nEstás en el "+ porcentaje +"% que más gana.";

    }

};
