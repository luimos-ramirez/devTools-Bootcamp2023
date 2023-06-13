function next_pal(numero){ 
    let siguienteNumero = numero+1;
    while (numero > 0) { 
        let siguienteNumeroInvertido = siguienteNumero.toString().split("").reverse().join("");
        if (siguienteNumero.toString() === siguienteNumeroInvertido.toString()){
            break;
        }
        siguienteNumero += 1;
    }
    return siguienteNumero;
}
console.log(next_pal(212));























































