function comprobarNumeros() {
    var resultado = document.getElementById("resultado");
    var respuesta1 = parseInt(document.getElementById("missing_1").value);
    var respuesta2 = parseInt(document.getElementById("missing_2").value);
    var respuesta3 = parseInt(document.getElementById("missing_3").value);
    var respuesta4 = parseInt(document.getElementById("missing_4").value);
    var respuesta5 = parseInt(document.getElementById("missing_5").value);
    var respuesta6 = parseInt(document.getElementById("missing_6").value);
    var respuesta7 = parseInt(document.getElementById("missing_7").value);
    var respuesta8 = parseInt(document.getElementById("missing_8").value);

    var resultado1 = (respuesta1 === 3) ? "<span style='color: green;'>Correcto</span>" : "<span style='color: red;'>Incorrecto</span>";
    var resultado2 = (respuesta2 === 4) ? "<span style='color: green;'>Correcto</span>" : "<span style='color: red;'>Incorrecto</span>";
    var resultado3 = (respuesta3 === 2) ? "<span style='color: green;'>Correcto</span>" : "<span style='color: red;'>Incorrecto</span>";
    var resultado4 = (respuesta4 === 15) ? "<span style='color: green;'>Correcto</span>" : "<span style='color: red;'>Incorrecto</span>";
    var resultado5 = (respuesta5 === 9) ? "<span style='color: green;'>Correcto</span>" : "<span style='color: red;'>Incorrecto</span>";
    var resultado6 = (respuesta6 === 63) ? "<span style='color: green;'>Correcto</span>" : "<span style='color: red;'>Incorrecto</span>";
    var resultado7 = (respuesta7 === 24) ? "<span style='color: green;'>Correcto</span>" : "<span style='color: red;'>Incorrecto</span>";
    var resultado8 = (respuesta8 === 63) ? "<span style='color: green;'>Correcto</span>" : "<span style='color: red;'>Incorrecto</span>";

    resultado.innerHTML = "Respuesta 1: " + resultado1 + "<br>" +
                           "Respuesta 2: " + resultado2 + "<br>" +
                           "Respuesta 3: " + resultado3 + "<br>" +
                           "Respuesta 4: " + resultado4 + "<br>" +
                           "Respuesta 5: " + resultado5 + "<br>" +
                           "Respuesta 6: " + resultado6 + "<br>" +
                           "Respuesta 7: " + resultado7 + "<br>" +
                           "Respuesta 8: " + resultado8 + "<br>";

    var aciertos = 0;
    var errores = 0;

    if (respuesta1 === 3) aciertos++;
    else errores++;

    if (respuesta2 === 4) aciertos++;
    else errores++;

    if (respuesta3 === 2) aciertos++;
    else errores++;

    if (respuesta4 === 15) aciertos++;
    else errores++;

    if (respuesta5 === 9) aciertos++;
    else errores++;

    if (respuesta6 === 63) aciertos++;
    else errores++;

    if (respuesta7 === 24) aciertos++;
    else errores++;

    if (respuesta8 === 63) aciertos++;
    else errores++;

    if (aciertos > errores) {
        mostrarImagen("imagen1.gif");
    } else {
        mostrarImagen("imagen2.gif");
    }
}


function mostrarImagen(src) {
    var img = new Image();
    img.src = src;
    img.style.width = "200px"; // ajusta el tamaño según tu necesidad
    img.style.height = "auto"; // ajusta el tamaño según tu necesidad

    var resultado = document.getElementById("resultado");
    resultado.appendChild(img);
}
