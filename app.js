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

function encriptar(){
    let str = obtenerCadena('txtCajaMensaje');

    //si el mensaje no es valido salgo de la función
    if(!mensajeValido(str)) {
        return
    }

    for (let i = 0; i < str.length; i++) {

        if (str[i] == 'e') {
            str = reemplazarVocal(str, i, 'enter')
            //actualizo la posicion del indice
            i += 4;
            continue
        };
        if (str[i] == 'i') {
            str = reemplazarVocal(str, i, 'imer')
            //actualizo la posicion del indice
            i += 3;
            continue
        };
        if (str[i] == 'a') {
            str = reemplazarVocal(str, i, 'ai')
            //actualizo la posicion del indice
            i += 1;
            continue
        };
        if (str[i] == 'o') {
            str = reemplazarVocal(str, i, 'ober')
            //actualizo la posicion del indice
            i += 3;
            continue
        };
        if (str[i] == 'u') {
            str = reemplazarVocal(str, i, 'ufat')
            //actualizo la posicion del indice
            i += 3;
            continue
        };        

    }

    //ajusto el tamaño dinamicamente para pantallas pequeñas
    // txtAreaPantallasMoviles();

    //muestro mi traducción
    mostrarCadena(str, 'txtCajaTraduccion');

    //habilito el botón 'copiar'
    document.getElementById("btnCopiar").classList.remove("hide-btn");
    //oculto la imagen
    document.getElementById("caja-munieco").setAttribute("hidden", true);

    return;
}

function desencriptar(){
    let str = obtenerCadena('txtCajaMensaje');
    
    str = str.replace(/enter/g, 'e');
    str = str.replace(/imer/g, 'i');
    str = str.replace(/ai/g, 'a');
    str = str.replace(/ober/g, 'o');
    str = str.replace(/ufat/g, 'u');

    limpiarCaja('txtCajaTraduccion');
    
    mostrarCadena(str, 'txtCajaTraduccion');

    return;

}

function reemplazarVocal(cadena, indice, reemplazo){
    return cadena.substring(0,indice) + reemplazo + cadena.substring(indice+1);
}

function obtenerCadena(idCadena){
    return document.getElementById(idCadena).value;
}

function mostrarCadena(cadena, idTextBox){
    document.getElementById(idTextBox).value = cadena;
}

function limpiarCaja(idCaja){
    document.getElementById(idCaja).value = '';  
}

function copiarTraduccion(){
    let cajaTexto = document.getElementById("txtCajaTraduccion");
    cajaTexto.disabled = false;
    //selecciono el texto
    cajaTexto.select();
    cajaTexto.setSelectionRange(0, 99999); 
    
    //guardo el texto
    document.execCommand("copy");
    
    //deselecciono el texto
    cajaTexto.setSelectionRange(0, 0);
    cajaTexto.disabled = true;
    
    limpiarCaja("txtCajaMensaje")

    return alert("¡Traducción copiada al portapapeles!");
}

function mensajeValido(mensaje){
    let regex = /^[a-z\s]*$/;

    if (!regex.test(mensaje)) {
        alert("Por favor, ingresa solo letras minúsculas y espacios.");
        return false;
    }

    return true;
}

function txtAreaPantallasMoviles() {
    if (window.innerWidth <= 768) {
        document.getElementById('txtCajaTraduccion').addEventListener('input', autoResizeTextarea);
        console.log("ENTRE");
    }
}

function autoResizeTextarea() {
    let textarea = document.getElementById('myTextarea');
    textarea.style.height = 'auto'; // Restaurar la altura predeterminada
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar la altura al contenido
}