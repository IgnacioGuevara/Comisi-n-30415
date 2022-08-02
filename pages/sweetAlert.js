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
function alertCarrito() {
    
    Swal.fire({
        title: "se ha agregado un producto al carrito",
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