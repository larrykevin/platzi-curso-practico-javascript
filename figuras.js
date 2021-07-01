//Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}

function calcularCuadrado() {
    const geometric = 'cuadrado';
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);

    return printData(perimetro, area, geometric);
}

//Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularTriangulo() {
    const lado1 = Number(document.getElementById('ladoATriangulo').value);
    const lado2 = Number(document.getElementById('ladoBTriangulo').value);
    const base = Number(document.getElementById('baseTriangulo').value);
    const semiperimetro = (lado1 + lado2 + base) / 2;
    const operator = semiperimetro * (semiperimetro - lado1) * (semiperimetro - base) * (semiperimetro - lado2);

    if (lado1 === lado2 && lado1 === base && lado2 === base) {
        geometric = 'triángulo equilátero';
        altura = (Math.sqrt(3 * lado1)) / 2;
    } else if (lado1 === lado2) {
        geometric = 'triángulo isósceles';
        altura = Math.sqrt( Math.pow(lado1, 2) - (Math.pow(base, 2) / 4) );
    } else if (lado1 === base) {
        geometric = 'triángulo isósceles';
        altura = Math.sqrt( Math.pow(lado1, 2) - (Math.pow(lado2, 2) / 4) );
    } else if (lado2 === base) {
        geometric = 'triángulo isósceles';
        altura = Math.sqrt( Math.pow(lado2, 2) - (Math.pow(lado1, 2) / 4) );
    } else if (lado1 !== lado2 && lado1 !== base && lado2 !== base) {
        geometric = 'triángulo';
        altura = (2 / base) * Math.sqrt(operator);
    }

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    const area = redondearDecimales(areaTriangulo(base, altura), 2);

    return printData(perimetro, area, geometric);
}

//Código del círculo
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio) * PI;
    return redondearDecimales(diametro, 2);
}

function areaCirculo(radio) {
    const area = redondearDecimales((radio * radio) * PI, 2);
    return area;
}

function calcularCirculo() {
    const geometric = 'círculo';
    const input = document.getElementById('InputCirculo');
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    const area = areaCirculo(value);

    return printData(perimetro, area, geometric);
}

function printData(valorPerimetro, valorArea, geometric) {
    const perimetro = document.getElementById('resPerimetro');
    const area = document.getElementById('resArea');
    perimetro.textContent = `El perímetro del ${geometric} es: ${valorPerimetro} cm`;
    area.textContent = `El área del ${geometric} es: ${valorArea} cm2`;
}

function redondearDecimales(numero, decimales) {
    numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');
    // Expresion regular para numeros con un cierto numero de decimales o mas
    if (numeroRegexp.test(numero)) {
        // Ya que el numero tiene el número de decimales requeridos o mas, se realiza el redondeo
        return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;
        // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado)
        // Si no lo es se devuelve el numero otra vez.
    }
}