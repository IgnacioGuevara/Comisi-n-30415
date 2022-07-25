/* ----NOMBRE---- */
/* function nombreCompleto() {
    let nombre = prompt("Ingrese su nombre completo.");
    if (nombre != "") {
        alert ("Bienvenido " + nombre + "!!"); 
        edadYgenero();
    } else {
        alert("no ha ingresado correctamente su nombre.")
        nombreCompleto();
    }
}

nombreCompleto(); */


/* ----EDAD---- */
/* function edadYgenero() {
    let años = parseFloat(prompt("Ingrese su edad"));
    if (años >= 13) {
        Generos();
    
    } else if (años < 13) {
        alert("Debe ser mayor de 13 años para poder ingresar al sitio web.");

    } else {
        alert("Debe que ingresar un valor numerico");
    }
} */


/* ---- FILTRO ---- */
/* function Generos() {

const videoJuegos = [
    { nombre: "amoung Us", precio: 0  , categoria: "1", img: "" },
    { nombre: "fall Guys", precio: 0, categoria: "1" },
    { nombre: "pool", precio: 0, categoria: "1" },
    
    { nombre: "fifa 22", precio: 90, categoria: "2" },
    { nombre: "pes 22", precio: 50, categoria: "2" },
    { nombre: "pes 2K22", precio: 70, categoria: "2" },
    { nombre: "wwe 22", precio: 30, categoria: "2" },
    { nombre: "nhl 2K22", precio: 70, categoria: "2" },
    
    { nombre: "uncharted 4", precio: 89, categoria: "3" },
    { nombre: "tomb raider", precio: 56, categoria: "3" },
    
    { nombre: "Call of duty", precio: 98, categoria: "4" },
    { nombre: "counter strike", precio: 25, categoria: "4" },
    { nombre: "battlefield 2042", precio: 93, categoria: "4" },
    { nombre: "god of war", precio: 8, categoria: "4" },

    { nombre: "league of legends", precio: 8, categoria: "5" },

    
];

let categoria = prompt("ingresa el número de la categoria \n 1- gratis \n 2- nuevo lanzamiento \n 3- deportes \n 4- accion \n 5- proximamente ");
let filtradoCategoria = videoJuegos.filter(elemento => elemento.categoria === categoria);

let mensaje = "";
filtradoCategoria.forEach(elemento => mensaje += "\n - " + elemento.nombre + ". ")
alert ("Los videojuegos de esta categoria son: " + mensaje)

let  nombreJuego = prompt("Ingrese el nombre del juego");
let filtradoNombre = filtradoCategoria.filter(elemento => elemento.nombre.includes(nombreJuego));

alert(`El nombre del juego que ha ingresado es: ${nombreJuego} ` )
} */







