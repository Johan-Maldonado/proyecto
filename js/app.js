// Función para verificar si el texto contiene caracteres no permitidos
function verificarTexto(texto) {
    const tieneMayusculas = /[A-Z]/.test(texto);
    const tieneCaracteresEspeciales = /[^a-z\s!]/.test(texto);

    if (tieneMayusculas || tieneCaracteresEspeciales) {
        return false;
    }
    return true;
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')   // Reemplazar 'e' primero
        .replace(/i/g, 'imes')    // Luego reemplazar 'i'
        .replace(/a/g, 'ai')      // Luego reemplazar 'a'
        .replace(/o/g, 'ober')    // Luego reemplazar 'o'
        .replace(/u/g, 'ufat');   // Finalmente reemplazar 'u'
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/ufat/g, 'u')    // Reemplazar 'ufat' primero
        .replace(/ober/g, 'o')    // Luego reemplazar 'ober'
        .replace(/ai/g, 'a')      // Luego reemplazar 'ai'
        .replace(/imes/g, 'i')    // Luego reemplazar 'imes'
        .replace(/enter/g, 'e');  // Finalmente reemplazar 'enter'
}

// Manejar el evento de clic en el botón de encriptar
document.getElementById('btnEncriptar').addEventListener('click', () => {
    const inputTexto = document.getElementById('inputTexto').value;

    if (verificarTexto(inputTexto)) {
        const textoEncriptado = encriptarTexto(inputTexto);
        document.getElementById('outputTexto').value = textoEncriptado;
    } else {
        document.getElementById('outputTexto').value = "Recuerda que no se aceptan mayúsculas ni caracteres especiales. Inténtalo de nuevo.";
    }
});

// Manejar el evento de clic en el botón de desencriptar
document.getElementById('btnDesencriptar').addEventListener('click', () => {
    const inputTexto = document.getElementById('inputTexto').value;

    if (verificarTexto(inputTexto)) {
        const textoDesencriptado = desencriptarTexto(inputTexto);
        document.getElementById('outputTexto').value = textoDesencriptado;
    } else {
        document.getElementById('outputTexto').value = "Recuerda que no se aceptan mayúsculas ni caracteres especiales. Inténtalo de nuevo.";
    }
});