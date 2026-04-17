var numero = prompt("Introduce un número entero");
alert ("El numero "+numero+" es "+parImpar(numero) );

function parImpar(numero){
    if (numero % 2 == 0) return "par";
    else return "impar";
}