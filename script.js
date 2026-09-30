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

        // Al entrar a una planta, comenzar desde arriba
        const informacion = pantallaSeleccionada.querySelector(".informacion-planta");

        if (informacion) {
            informacion.scrollTop = 0;
        }
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
    ],

    torenia: [
        "imagenes/torenia/foto10.jpg",
        "imagenes/torenia/foto11.jpg",
        "imagenes/torenia/foto12.jpg"
    ],

    lobelia: [
        "imagenes/lobelia/foto13.jpg",
        "imagenes/lobelia/foto14.jpg",
        "imagenes/lobelia/foto15.jpg"
    ],

    tomThumb: [
        "imagenes/tom-thumb/foto16.jpg",
        "imagenes/tom-thumb/foto17.jpg",
        "imagenes/tom-thumb/foto18.jpg"
    ],

    crassulaPubescens: [
        "imagenes/crassula-pubescens/foto19.jpg",
        "imagenes/crassula-pubescens/foto20.jpg",
        "imagenes/crassula-pubescens/foto21.jpg"
    ],

    piedraLunar: [
        "imagenes/piedra-lunar/foto22.jpg",
        "imagenes/piedra-lunar/foto23.jpg",
        "imagenes/piedra-lunar/foto24.jpg"
    ],

    petunia: [
        "imagenes/petunia/foto25.jpg",
        "imagenes/petunia/foto26.jpg",
        "imagenes/petunia/foto27.jpg"
    ],

    sedum: [
        "imagenes/sedum/foto28.jpg",
        "imagenes/sedum/foto29.jpg",
        "imagenes/sedum/foto30.jpg"
    ],

    begonia: [
        "imagenes/begonia/foto31.jpg",
        "imagenes/begonia/foto32.jpg",
        "imagenes/begonia/foto33.jpg"
    ]

};


// ==============================
// FOTO ACTUAL
// ==============================

const fotoActual = {

    peperomia: 0,
    hibisco: 0,
    oxalis: 0,

    torenia: 0,
    lobelia: 0,
    tomThumb: 0,
    crassulaPubescens: 0,
    piedraLunar: 0,
    petunia: 0,
    sedum: 0,
    begonia: 0

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