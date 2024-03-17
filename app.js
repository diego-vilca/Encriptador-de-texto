/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
*/
let mensaje = '';

function encriptar(){
    mensaje = document.getElementById('mensaje').value;
    let str = mensaje;

    for (let i = 0; i < str.length; i++) {

        if (str[i] == 'e') {
            console.log(str);
            str = reemplazarLetra(str, i, 'enter')
            console.log('entre e');
            i += 4;
            // console.log(str);
            continue
        };
        if (str[i] == 'i') {
            console.log(str);
            str = reemplazarLetra(str, i, 'imer')
            console.log('entre i');
            i += 3;
            // console.log(str);
            continue
        };
        if (str[i] == 'a') {
            console.log(str);
            str = reemplazarLetra(str, i, 'ai')
            console.log('entre a');
            i += 1;
            // console.log(str);
            continue
        };
        if (str[i] == 'o') {
            console.log(str);
            str = reemplazarLetra(str, i, 'ober')
            console.log('entre o');
            i += 3;
            // console.log(str);
            continue
        };
        if (str[i] == 'u') {
            console.log(str);
            str = reemplazarLetra(str, i, 'ufat')
            console.log('entre u');
            i += 3;
            // console.log(str);
            continue
        };        

        console.log('sali');
        
    }

    
    function reemplazarLetra(cadena, indice, reemplazo){
        return cadena.substring(0,indice) + reemplazo + cadena.substring(indice+1);
    }
    
      
    console.log(str);
    //mostrarMensaje();
    return;
    //console.log(mensaje);
}



function mostrarMensaje(){
    document.getElementById('txtMostrarMensaje').value = nuevoMensaje;
    return;
}