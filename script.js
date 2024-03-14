// Función para validar el nombre
function validarNombre(nombre) {
    // La expresión regular permite letras (mayúsculas y minúsculas), espacios, guiones y letras con tilde
    var regex = /^[a-zA-Z\s-áéíóúÁÉÍÓÚ]+$/;
    return regex.test(nombre);
}

// Función para validar el correo electrónico
function validarCorreo(correo) {
    // La expresión regular para validar un correo electrónico
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(evento) {
    evento.preventDefault(); // Prevenir la recarga de la página

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;

    // Validar el nombre y el correo electrónico
    if (!validarNombre(nombre)) {
        alert('El nombre solo debe contener letras (con o sin tilde), espacios y guiones.');
        return;
    }

    if (!validarCorreo(correo)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Imprimir los valores en la consola (puedes reemplazar esto con tu propia lógica)
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
}

// Agregar el manejador de eventos al formulario cuando la página se haya cargado completamente
window.onload = function () {
    var formulario = document.querySelector('.formulario');
    formulario.addEventListener('submit', manejarEnvioFormulario);
}
