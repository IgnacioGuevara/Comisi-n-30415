function nombreCompleto() {
    let nombre = prompt ("Ingrese su nombre completo.");
        alert ("Bienvenido " + nombre + " !!");
}


function carnetConducir() {
    let Registro = prompt("¿Tiene licencia de conducir? ");
    switch(Registro ){
        case "si":
        alert("Puede conducir.");
        break;
        case "no":
            let email = prompt("¿Desea rendir el examen para obterner su licencia de conducir? ");
            if (email == "si") {
                prompt("Ingrese su correo electronico para contactanos con usted. ");
                alert("Gracias por confiar en nosotros, dentro de las 48hs habiles nos contactaremos con usted");
                
            } else if (email =="no") {
                alert("La accion ha sido finalizada.");
                
            }else{
                alert("no ha respondido la pregunta correctamente, el sistema se ha bloqueado");
                
            }
        break;
        default:
            alert("no ha respondido la pregunta correctamente, el sistema se ha bloqueado");
        break;
    }
}



function edad() {
    let años = parseFloat(prompt("Ingrese su edad"));
    if (años >= 18) {
        carnetConducir();
    
    } else if (años < 18) {
        alert("No tiene la edad unficiente para conducir.");

    } else {
        alert("Debe que ingresar un valor numerico");
    }
}




nombreCompleto();
edad();
