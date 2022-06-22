function nombreCompleto() {
    let nombre = prompt ("Ingrese su nombre completo.");
        alert ("Bienvenido " + nombre + " !!");
}
function generoRopa() {
    let genero = prompt("¿Qué genero de prenda está buscando?");
        switch (genero) {
            case  "masculino":
                alert("masculino")
                break;
            case 2 || "femenino":
                alert("femenino")
                break;
            case 3 || "niño/a":
                alert("niño")
                break;
            case 4 || "unisex":
                alert("unisex")
                break;
        
            default:
                alert("sada")
                break;
        }
    }


function tipoPrenda() {
    let prenda = prompt("¿Qué tipo de prenda esta buscando? ");
        switch (prenda) {
            case 1 || "pantalon":
                alert("pantalon")
                break;
            case 2 || "remera":
                alert("remera")
                break;
            case 3 || "medias":
                alert("media")
                break;
            case 4 || "buzo" || "campera":
                alert("buzo")
                break;
        
            default:
                break;
        }
        
    }


function talle() {
    let talle = prompt ("¿Qué talle está buscando?")
        switch (talle) {
            case 1 || "s" :
                alert("s")
                break;
            case 2 || "m" :
                alert("m")
                break;
            case 3 || "l":
                alert("l")
                break;
            case 4 || "xl" :
                alert("xl")
                break;
        
            default:
                break;
        }
    }

/*     nombreCompleto(); */
    generoRopa();
    tipoPrenda();
    talle();


/* 




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
 */
