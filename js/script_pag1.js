// Obtener el nombre del parámetro de la URL
var urlParams = new URLSearchParams(window.location.search);
var nombre = urlParams.get('nombre');
// Mostrar el nombre en el elemento span
document.getElementById('nombreUsuario').innerText = nombre;
