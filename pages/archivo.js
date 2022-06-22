/* ----NOMBRE---- */
function nombreCompleto() {
    let nombre = prompt ("Ingrese su nombre completo.");
        alert ("Bienvenido " + nombre + " !!");
}
/* ----PRECIO---- */
function precio() {
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
}
/* ----EDAD---- */
function edadYgenero() {
    let años = parseFloat(prompt("Ingrese su edad"));
    if (años >= 13) {
        registroGenero();
    
    } else if (años < 13) {
        alert("Debe ser mayor de 13 años para poder ingresar al sitio web.");

    } else {
        alert("Debe que ingresar un valor numerico");
    }
}
/* ----GENERO---- */
function registroGenero() {
    let Registro = prompt("¿Que genero esta buscando? \n - gratuitos \n - nuevos lanzamientos \n - deportivos \n - accion \n - proximamentes ");
    switch(Registro){
        case "gratis":
            alert("ha ingresado a la seccion de: Juegos Gratuitos. ");
            precio();
        break;
        case "Nuevos lanzamientos":
            alert("ha ingresado a la seccion de: Nuevos lanzamientos. ");
            precio();
        break;
        case "deporte":
            alert("ha ingresado a la seccion de: Juegos Deportivos. ");
            precio();
        break;
        case "accion":
            alert("ha ingresado a la seccion de: Juegos De Accion. ");
            precio();
        break;
        case "proximamente":
            alert("ha ingresado a la seccion de: Proximamente. ");
            precio();
        break;
        default:
            alert("no ha ingresado ningun valor")
        break;
    }
}


nombreCompleto();
edadYgenero();