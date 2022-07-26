    const verCarrito = document.getElementById("verCarrito");
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    const seccionProductos = document.getElementById("productos");



let videoJuegos = [
    { nombre: "amoung Us", precio: 0 , categoria: "1", img: "./img/amoungUs.webp"  },
    { nombre: "fall Guys", precio: 0 , categoria: "1", img: "./img/fallGuys.jpg" },
    { nombre: "pool", precio: 0 , categoria: "1", img: "./img/pool.jpg" },
    
    { nombre: "fifa 22", precio: 50 , categoria: "2", img: "./img/fifa22.avif" },
    { nombre: "pes 2021", precio: 70 , categoria: "2", img: "./img/pes2021.jpg" },
    { nombre: "wwe 22", precio: 3 , categoria: "2", img: "./img/wwe22.jpg" },
    { nombre: "nhl 2K22", precio: 70 , categoria: "2", img: "./img/nhl2022.jpg" },
    
    { nombre: "uncharted 4", precio: 89 , categoria: "3", img: "./img/uncharted.jpg" },
    { nombre: "tomb raider", precio: 56 , categoria: "3", img: "./img/tombraider.jpg" },
    
    { nombre: "call of duty", precio: 98 , categoria: "4", img: "./img/callofduty.jpg" },
    { nombre: "counter strike", precio: 25 , categoria: "4", img: "./img/counterstrike.jpg" },
    { nombre: "battlefield 2042", precio: 93 , categoria: "4", img: "./img/battlefield.jpg" },
    { nombre: "god of war", precio: 8 , categoria: "4", img: "./img/godOfWar.jpg" },

    { nombre: "league of legends", precio: 8 , categoria: "5", img: "./img/LOL.jpg" },
];

function crearTarjeta() {
    for (const producto of videoJuegos) {
        let card = document.createElement("div");
        card.innerHTML = `  <div class=" card text-center col-lg-3 col-md-5 col-sm-5 m-4">
                                <img class = "card-img-top p-2 " src=${producto.img} alt="${producto.nombre}">
                                <div class =" card-body">
                                    <h3 class = "card-title">  ${producto.nombre}</h3>
                                    <p class = "card-text"> Precio: ${producto.precio} USD</p>
                                    <button id="agregar${producto.categoria}" class="p-2 bg-success m-2 text-white borderCarrito"> Agregar <i class="fas-fa-shopping-cart"</i> </button>
                                </div>
                            </div>`;
        card.className = ("container")
        
        seccionProductos.append(card)
    }
}
crearTarjeta();

    function cargarPoductos(videoJuegos) {
        container.innerHTML = "";
        for (const producto of videoJuegos) {
            let item = document.createElement("div");
            item.innerHTML = `  <div class=" card text-center col-lg-3 col-md-5 col-sm-5 m-4">
                                        <img class = "card-img-top p-2 " src=${producto.img} alt="${producto.nombre}">
                                        <div class =" card-body">
                                            <h3 class = "card-title">  ${producto.nombre}</h3>
                                            <p class = "card-text"> Precio: ${producto.precio} USD</p>
                                            <button id="agregar${producto.categoria}" class="p-2 bg-success m-2 text-white borderCarrito"> Agregar <i class="fas-fa-shopping-cart"</i> </button>
                                        </div>
                                </div>`
            container.append(item);

/*             let addCarrito = document.getElementById(producto.categoria)
            addCarrito.addEventListener("click", () => {
                carrito.push(videoJuegos);
                localStorage.setItem("carrito", JSON.stringify(carrito));
            }) */

        };
    }



    let boton1 = document.getElementById("boton1")
    boton1.addEventListener("click", ascendente)

function ascendente() {
    let ordenadosAZ = [...videoJuegos].sort((a, b) =>{
        if (a.nombre > b.nombre) {
            return 1
        } else if (a.nombre < b.nombre){
            return -1
        } else{
            return 0
        }
    })
    cargarPoductos(ordenadosAZ)
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

    let boton2 = document.getElementById("boton2")
    boton2.addEventListener("click", descendente)
function descendente() {
    let ordenadosZA = [...videoJuegos].sort((a, b) =>{
        if (a.nombre > b.nombre) {
            return -1
        } else if (a.nombre < b.nombre){
            return 1
        } else{
            return 0
        }
    })
    cargarPoductos(ordenadosZA)
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


    verCarrito.addEventListener("click", () => {
        seccionProductos.innerHTML = "";
        for (const producto of carrito) {
            let cardCarrito = document.createElement("div");
            cardCarrito.innerHTML = `<div class=" card text-center col-lg-3 col-md-5 col-sm-5 m-4">
                                        <img class = "card-img-top p-2 " src=${producto.img} alt="${producto.nombre}">
                                        <div class =" card-body">
                                            <h3 class = "card-title">  ${producto.nombre}</h3>
                                            <p class = "card-text"> Precio: ${producto.precio} USD</p>
                                            <button id="agregar${producto.categoria}" class="p-2 bg-success m-2 text-white borderCarrito"> Agregar <i class="fas-fa-shopping-cart"</i> </button>
                                        </div>
                                    </div>`
            seccionProductos.append(cardCarrito);
            };
        
    
            
            seccionProductos.innerHTML = "";
            
        });







