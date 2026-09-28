
// ==============================
// PANTALLA DE CARGA
// ==============================

window.addEventListener("load", function () {

    setTimeout(function () {

        const carga = document.querySelector(".pantalla-carga");

        if (carga) {
            carga.style.display = "none";
        }

    }, 1500);

});


// ==============================
// CAMBIAR ENTRE PANTALLAS
// ==============================

function mostrarPantalla(id) {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function (pantalla) {
        pantalla.style.display = "none";
        pantalla.classList.remove("activa");
    });

    const pantallaSeleccionada = document.getElementById(id);

    if (pantallaSeleccionada) {
        pantallaSeleccionada.style.display = "flex";
        pantallaSeleccionada.classList.add("activa");
    }

}


// ==============================
// FOTOS DE LAS PLANTAS
// ==============================

const fotos = {

    peperomia: [
        "imagenes/peperomia/foto1.jpg",
        "imagenes/peperomia/foto2.jpg",
        "imagenes/peperomia/foto3.jpg"
    ],

    hibisco: [
        "imagenes/hibisco/foto4.jpg",
        "imagenes/hibisco/foto5.jpg",
        "imagenes/hibisco/foto6.jpg"
    ],

    oxalis: [
        "imagenes/oxalis/foto7.jpg",
        "imagenes/oxalis/foto8.jpg",
        "imagenes/oxalis/foto9.jpg"
    ]

};


// ==============================
// FOTO ACTUAL
// ==============================

const fotoActual = {

    peperomia: 0,
    hibisco: 0,
    oxalis: 0

};


// ==============================
// CAMBIAR FOTO
// ==============================

function cambiarFoto(planta, direccion) {

    fotoActual[planta] += direccion;

    if (fotoActual[planta] < 0) {

        fotoActual[planta] =
            fotos[planta].length - 1;

    }

    if (fotoActual[planta] >= fotos[planta].length) {

        fotoActual[planta] = 0;

    }

    const imagen =
        document.getElementById("foto-" + planta);

    if (imagen) {

        imagen.src =
            fotos[planta][fotoActual[planta]];

    }

}
