const lista1 = [
    1,
    2,
    2,
    3,
    2,
    1,
    4,
    1,
    2,
    3,
    3,
    1,
    4,
    2,
    5,
    1,
    1,
];

const lista1Count = {};

lista1.map(
    function (elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1 // = lista1Count[elemento] +1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcomulado, nuevoValor){
            return valorAcomulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length - 1]



