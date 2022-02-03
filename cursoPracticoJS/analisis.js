let salariosCol = [];

//Helpers
colombia.forEach(function(persona){
    salariosCol.push(persona.salary);
    });

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function mediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/ lista.length;
    return promedioLista;
}
function esPar(numero){
    return (numero % 2 ===0);

}

//Calculadora de mediana
//Mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
   
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];
        const mediana =  (mediaAritmetica([personaMitad1, personaMitad2]));
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana Top 10%



const spliceStart = ([(salariosColSorted.length)*0.9]);
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount );




const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col =  medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol, medianaTop10Col});


