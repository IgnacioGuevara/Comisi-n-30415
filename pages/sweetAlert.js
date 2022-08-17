function alertAZ() {
Swal.fire({
    title: "ORDENADO: A-Z",
    padding:"1.rem",
    background:"#CFF69F",
    backdrop:false,
    timer:"3000",
    timerProgressBar:true,
    toast: true,
    position:"bottom-end",
    showConfirmButton: false,
    showCloseButton:true,
    customClass:{
        popup: 'alert'
    },
});
}

function alertZA() {
    
Swal.fire({
    title: "ORDENADO: Z-A",
    padding:"1.rem",
    background:"#CFF69F",
    backdrop:false,
    timer:"3000",
    timerProgressBar:true,
    toast: true,
    position:"bottom-end",
    showConfirmButton: false,
    showCloseButton:true,
    customClass:{
        popup: 'alert'
    },
});
}
/* finalizar compra carrito (editar) */
function alertCarrito() {
    
    Swal.fire({
        title: 'SU COMPRA HA SIDO FINALIZADA',
        position: 'center',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
    }
function enviarFormulario() {
    
    Swal.fire({
        title: 'EL FORMULARIO HA SIDO ENVIADO',
        position: 'center',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
    }

    /* agregar al carrito boton card */
function agregarCarritoCard() {
    
    Swal.fire({
        title: "SE HA AGREGADO UN PRODUCTO AL CARRITO",
        padding:"1.rem",
        background:"#CFF69F",
        backdrop:false,
        timer:"3000",
        timerProgressBar:true,
        toast: true,
        position:"top-end",
        showConfirmButton: false,
        showCloseButton:true,
        customClass:{
            popup: 'alert'
        },
    });
    }
    /* vaciar carrito */
function vaciarCarrito() {
    
    Swal.fire({
        title: "SE HA VACIADO EL CARRITO",
        padding:"1.rem",
        background:"#CFF69F",
        backdrop:false,
        timer:"3000",
        timerProgressBar:true,
        toast: true,
        position:"top-end",
        showConfirmButton: false,
        showCloseButton:true,
        customClass:{
            popup: 'alert'
        },
    });
    }
    /* agregar carrito btn + */
function agregarCarritoAlert() {
    
    Swal.fire({
        title: "HA SUMADO UN ELEMENTO AL CARRITO",
        padding:"1.rem",
        background:"#CFF69F",
        backdrop:false,
        timer:"3000",
        timerProgressBar:true,
        toast: true,
        position:"top-end",
        showConfirmButton: false,
        showCloseButton:true,
        customClass:{
            popup: 'alert'
        },
    });
    }
    /* quitar carrito btn - */
function quitarCarritoAlert() {
    
    Swal.fire({
        title: "HA QUITADO UN ELEMENTO DEL CARRITO",
        padding:"1.rem",
        background:"#CFF69F",
        backdrop:false,
        timer:"3000",
        timerProgressBar:true,
        toast: true,
        position:"top-end",
        showConfirmButton: false,
        showCloseButton:true,
        customClass:{
            popup: 'alert'
        },
    });
    }