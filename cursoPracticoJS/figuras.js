
//Código del cuadrado
console.group("Medidas cuadrado");
/* const ladoCuadrado = 5;
console.log("Los lados miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado){
    return lado * 4;
}


/* console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm"); */


function areaCuadrado(lado){
    return lado * lado;
}

/* console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2"); */

console.groupEnd();
//Código del triangulo

console.group("Medidas triangulo");
/* 
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;

console.log("Los lados del tirangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + ladoTriangulo3+ "cm" );

const alturaTriangulo = 5.5;
console.log("La altura mide: " + alturaTriangulo + "cm"); */


function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
};

/* console.log("El perimetro mide: " + periemtroTriangulo + "cm"); */

function areaTriangulo(lado3, altura) {
    return (lado3*altura)/2
};


/* const areaTriangulo = (ladoTriangulo3*alturaTriangulo)/2 ;
console.log("El area mide: " + areaTriangulo + "cm^2"); */

console.groupEnd();

//Código circulos

console.group("Medidas circulo");

//Radio


/* const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + "cm");
 */


//Diametreo

function diametroCirculo(radio) {
    return 2*radio
};
/* const diametroCirculo = radioCirculo *2;
console.log("El diametro del circulo mide: " + diametroCirculo + "cm"); */

//Pi


const PI = Math.PI;
/* console.log("PI vale: " + PI + "cm"); */

//Periemetro

function perimetroCirculo(radio) {
    return diametroCirculo(radio)*PI
};


/* const perimetroCirculo = 2*PI*radioCirculo;

console.log("El perimetro del circulo mide: " + perimetroCirculo + "cm"); */


//Area

function areaCirculo(radio) {
    return PI*radio**2
};


/* const areaCirculo = PI*radioCirculo**2;
console.log("El area del circulo mide: " + areaCirculo + "cm^2");
 */
console.groupEnd();


//-----------------HTML---------------


//--------------Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularÁreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


//------------Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

}

function calcularÁreaTriangulo(){
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

        const input4 = document.getElementById("InputTriangulo4");
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);
    alert(area);
}

//--------------Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);

}

function calcularÁreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}