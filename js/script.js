function redireccionar() {
    var nombre = document.getElementById("nombre").value;
    window.location.href = "pag1.html?nombre=" + nombre;
}
