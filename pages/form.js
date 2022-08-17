const validarCampos = () =>{
    let nombre = document.getElementById('nombre').value;
    let nombreError = document.getElementById('nombreError');
    let apellido = document.getElementById('apellido').value;
    let apellidoError = document.getElementById('apellidoError');
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');



    if (nombre.trim() === '') {
        nombreError.innerHTML = 'Faltó completar el campo';
        nombreError.className = 'text-danger';
        return false;
    }else{
        nombreError.innerHTML = ''
    }
    if (apellido.trim() === '') {
        apellidoError.innerHTML = 'Faltó completar el campo';
        apellidoError.className = 'text-danger';
        return false;
    }else{
        apellidoError.innerHTML = ''
    }
    if (email.trim()  === '' )   {
        emailError.innerHTML = 'Faltó completar el campo';
        emailError.className = 'text-danger';
        return false;
    }else{
        emailError.innerHTML = ''
    }
    if (email === '' )   {
        emailError.innerHTML = 'Faltó completar el campo';
        emailError.className = 'text-danger';
        return false;
    }else{
        emailError.innerHTML = ''
    }
    guardarDatos(nombre, apellido, email)
    const datosUsuarios = recuperarDatos();
    document.getElementById('resultado').innerHTML = `
    <h2>Bienvenido señor ${datosUsuarios.nombreUsuario} !!</h2>
    <p>nombre:${datosUsuarios.nombreUsuario} </p> 
    <p>apellido:${datosUsuarios.apellidoUsuario} </p> 
    <p>email:${datosUsuarios.emailUsuario} </p>
    <p>En las proximas horas le estaremos enviado un correo electronico!! </p>
    `
    document.getElementById('resultado').className = "bg-light fs-4"

    
}

const guardarDatos = (nombre, apellido, email) =>{
    const datos = {nombreUsuario:nombre, apellidoUsuario:apellido, emailUsuario:email} ;
    localStorage.setItem("datosUsuarios", JSON.stringify(datos))

}

const recuperarDatos = () =>{
    return JSON.parse(localStorage.getItem('datosUsuarios'))
}


document.getElementById('btnEnviar').onclick = validarCampos;