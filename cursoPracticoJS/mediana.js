const lista1 = [
    100,
    200,
    300,
    500,
    100,

];

function comparar ( a, b ){ return a - b; }

function esPar(number){
    if (number % 2 === 0){
        return true;
    }else { 
        return false;
    }
}

function mediana(listaOrginial){
    const listaOrdenada = listaOrginial.sort( comparar );
    const mitadLista = listaOrdenada.length /2 -1;

    if (esPar(listaOrdenada.length) == true){
        const elemento1 =listaOrdenada[mitadLista];
        const elemento2 =listaOrdenada[mitadLista +1];
        const prom = (elemento2 + elemento1)/2;
    
        return prom ;
        
    }else {
        const pos = parseInt(mitadLista)+1;
        const mediana =listaOrginial[pos];
        return mediana;

    }}
    


