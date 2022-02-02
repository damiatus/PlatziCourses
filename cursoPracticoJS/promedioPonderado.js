const alumno = [
    {nombre: "mat1", nota:  70, ponderación: 0.2},
    {nombre:"mat2", nota: 25,ponderación: 0.1},
    {nombre:"mat3", nota: 40,ponderación: 0.3},
    {nombre:"mat4", nota: 55,ponderación: 0.1},

];

let promedio = [];
let notaFinal = [0];

function promedioPonderado(notas){
    notas.forEach(function(listado){
    promedio.push(listado.nota * listado.ponderación);
    });


    promedio.forEach(function(elemento){
    notaFinal[0]= notaFinal[0]+elemento;
    });

    return notaFinal;
}