alert('Por favor, completa todos los campos.');
return;
// Validación básica de email
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(correo)) {
alert('Por favor, introduce un correo electrónico válido.');
return;
}

// Validación de número de celular (ejemplo simple)
const celularPattern = /^\d{10}$/;
if (!celularPattern.test(celular)) {
alert('Por favor, introduce un número de celular válido (10 dígitos).');
return;
}

// Simulación de registro exitoso
alert('Registro exitoso. Redirigiendo a la página de inicio...');
window.location.href = 'login.html';

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
event.preventDefault();

// Obtener valores de correo y contraseña
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (!email || !password) {
alert('Por favor, ingresa tu correo y contraseña.');
return;
}

// Validación básica de email
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(email)) {
alert('Por favor, introduce un correo electrónico válido.');
return;
}

// Simulación de login exitoso
alert('Inicio de sesión exitoso. Redirigiendo a la página de categorías...');
window.location.href = 'categories.html';
});

function editarPerfil() {
alert('Función de editar perfil en construcción.');
}

// Simulación para mostrar la inicial del correo en el perfil (en la parte superior derecha)
const profileIcon = document.querySelector('.profile-icon');
if (profileIcon) {
const userEmail = 'juan.perez@example.com';  // Simulación de correo de usuario
profileIcon.textContent = userEmail.charAt(0).toUpperCase();
}
// Función para habilitar la edición de los campos del perfil
function editarPerfil() {
    document.getElementById("nombre").removeAttribute("readonly");
    document.getElementById("apellidoPaterno").removeAttribute("readonly");
    document.getElementById("apellidoMaterno").removeAttribute("readonly");
    document.getElementById("email").removeAttribute("readonly");
    document.getElementById("region").removeAttribute("disabled");
    document.getElementById("provincia").removeAttribute("disabled");
    document.getElementById("comuna").removeAttribute("disabled");

    // Mostrar botón de guardar y ocultar botón de editar
    document.getElementById("guardar").style.display = "inline-block";
    document.getElementById("editar-informacion").style.display = "none";
}

// Función para guardar los cambios realizados en el perfil
function guardarPerfil() {
    // Aquí puedes agregar la lógica para enviar los datos actualizados al servidor
    
    // Volver a hacer los campos no editables
    document.getElementById("nombre").setAttribute("readonly", true);
    document.getElementById("apellidoPaterno").setAttribute("readonly", true);
    document.getElementById("apellidoMaterno").setAttribute("readonly", true);
    document.getElementById("email").setAttribute("readonly", true);
    document.getElementById("region").setAttribute("disabled", true);
    document.getElementById("provincia").setAttribute("disabled", true);
    document.getElementById("comuna").setAttribute("disabled", true);

    // Ocultar botón de guardar y volver a mostrar el botón de editar
    document.getElementById("guardar").style.display = "none";
    document.getElementById("editar-informacion").style.display = "inline-block";
}

