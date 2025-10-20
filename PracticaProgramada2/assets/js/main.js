
document.addEventListener("DOMContentLoaded", function () {

    const nombre = "PracticaProgramada2";
    console.log(`El DOM ha sido cargado: ${nombre}`);


    //Ejercicio2//
    const btnCambiar = document.querySelector("#btnCambiar");
    const texto = document.querySelector("#texto");
    btnCambiar.addEventListener("click", function () {
        texto.innerText = "El texto se ha cambiado con exito!";
        console.log("Texto cambiado por el usuario");
    });

    //Ejercicio3//
    const btnEvaluar = document.querySelector("#btnEvaluar");
    const inputEdad = document.querySelector("#input-edad");
    const resultado = document.querySelector("#resultado");
    btnEvaluar.addEventListener("click", function () {
        const edad = Number(inputEdad.value);
        if (isNaN(edad) || edad < 0) {
            return;
        }
        if (edad > 18) {
            resultado.innerText = "Eres mayor de edad.";
            resultado.className = "alert alert-success";
        } else {
            resultado.innerText = "Eres menor de edad.";
            resultado.className = "alert alert-warning";
        }
        console.log(`Edad evaluada: ${edad}`);
    });

    //Ejercicio4//
    const btnCargar = document.querySelector("#btnCargar");
    if (btnCargar) btnCargar.addEventListener("click", cargarClientes);

    const input = document.querySelector("#input-nombre");
    if (input) input.addEventListener("change", mostrarNombre);

});

const mostrarNombre = (event) => {
    const nombre = event.target.value;

    const textNombre = document.querySelector("#textNombre");
    if (textNombre) {
        textNombre.innerText = `El nombre es: ${nombre}`;
    }
};

const estudiantes = [
    { codigo: 1, nombre: "Edwin Wen", nota: 85 },
    { codigo: 2, nombre: "Kevin Yang", nota: 72 },
    { codigo: 3, nombre: "Luis Artavia", nota: 91 },
    { codigo: 4, nombre: "Maria Alegre", nota: 68 },
    { codigo: 5, nombre: "Luis Aguilar", nota: 77 }
];

let tbody = document.querySelector("#tb_clientes tbody");

const cargarClientes = () => {

    const tabla = document.querySelector("#tb_clientes");
    if (!tabla) return;

    if (!tbody) {
        tbody = document.createElement("tbody");
        tabla.appendChild(tbody);
    }

    tbody.innerHTML = "";

    estudiantes.forEach(estudiante => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${estudiante.codigo}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.nota}</td>
        `;
        tbody.appendChild(fila);
    });

    console.log(`Se cargaron ${estudiante.length} registros en la tabla.`);
};
