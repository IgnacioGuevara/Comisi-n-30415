/* ----NOMBRE---- */
function nombreCompleto() {
    let nombre = prompt ("Ingrese su nombre completo.");
        alert ("Bienvenido " + nombre + " !!");
}
/* ----PRECIO---- */
/* function precio() {
    let presupuesto = prompt("Ingrese el valor que esta dispuesto a pagar por un producto. \n - $0 USD \n - $1 USD a $10 USD \n - $11 USD a $50 \n - $50 USD a $100 USD" )
    if (presupuesto == 0) {
        
    } else if (presupuesto >= 1 && presupuesto <= 10 ){
        alert("los filtros se han actualizado.")
    } else if (presupuesto >= 11 && presupuesto <= 50 ){
        alert("los filtros se han actualizado.")
    } else if (presupuesto >= 51 && presupuesto <= 100 ){
        alert("los filtros se han actualizado.")
    }else {
        alert ("No ha ingresado ningun dato solicitado.")
    }
} */
/* ----EDAD---- */
function edadYgenero() {
    let años = parseFloat(prompt("Ingrese su edad"));
    if (años >= 13) {
        Generos();
    
    } else if (años < 13) {
        alert("Debe ser mayor de 13 años para poder ingresar al sitio web.");

    } else {
        alert("Debe que ingresar un valor numerico");
    }
}
/* ----GENERO---- */
function registroGenero() {
    let Registro = prompt("¿Que genero esta buscando? \n - gratis \n - nuevo lanzamiento \n - deportes \n - accion \n - proximamente ");
    switch(Registro){
        case "gratis":
            precio();
            alert("ha ingresado a la seccion de: juegos gratis. ");

        break;
        case "Nuevo lanzamiento":
            alert("ha ingresado a la seccion de: nuevos lanzamientos. ");
            precio();
        break;
        case "deporte":
            alert("ha ingresado a la seccion de: juegos deportivos. ");
            precio();
        break;
        case "accion":
            alert("ha ingresado a la seccion de: Juegos De Accion. ");
            precio();
        break;
        case "proximamente":
            (alert("ha ingresado a la seccion de: proximamente. "));
            precio();
        break;
        default:
            alert("no ha ingresado ningun valor")
        break;
    }
}

nombreCompleto();
edadYgenero(); 


function Generos() {

const videoJuegos = [
    { nombre: "amoung Us", precio: 0  , categoria: "gratis" },
    { nombre: "fall Guys", precio: 0, categoria: "gratis" },
    { nombre: "pool", precio: 0, categoria: "gratis" },
    
    { nombre: "fifa 22", precio: 90, categoria: "deportes" },
    { nombre: "pes 22", precio: 50, categoria: "deportes" },
    { nombre: "pes 2K22", precio: 70, categoria: "deportes" },
    { nombre: "wwe 22", precio: 30, categoria: "deportes" },
    { nombre: "nhl 2K22", precio: 70, categoria: "deportes" },
    
    { nombre: "uncharted 4", precio: 89, categoria: "nuevo lanzamiento" },
    { nombre: "tomb raider", precio: 56, categoria: "nuevo lanzamiento" },
    
    { nombre: "Call of duty", precio: 98, categoria: "accion" },
    { nombre: "counter strike", precio: 25, categoria: "accion" },
    { nombre: "battlefield 2042", precio: 93, categoria: "accion" },
    { nombre: "god of war", precio: 8, categoria: "accion" },

    { nombre: "league of legends", precio: 8, categoria: "proximamente" },

    
];

let categoria = prompt("ingresa la categoria \n - gratis \n - nuevo lanzamiento \n - deportes \n - accion \n - proximamente ");
let filtradoCategoria = videoJuegos.filter(elemento => elemento.categoria === categoria);

let nombre = prompt("Ingrese el nombre del juego");
let filtradoNombre = filtradoCategoria.filter(elemento => elemento.nombre.includes(nombre));

console.log(filtradoNombre);

}

