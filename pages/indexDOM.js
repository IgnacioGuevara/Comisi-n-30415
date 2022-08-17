/*     const seccionProductos = document.getElementById("productos");

    const carrito = []; 
    const carritoStorage = JSON.parse (localStorage.getItem("carrito")) || [];




let videoJuegos = [
    { nombre: "amoung Us", precio: 0 , categoria: "1", img: "./img/amoungUs.webp" , id: 1 },
    { nombre: "fall Guys", precio: 0 , categoria: "1", img: "./img/fallGuys.jpg", id: 2 },
    { nombre: "pool", precio: 0 , categoria: "1", img: "./img/pool.jpg", id: 3 },
    
    { nombre: "fifa 22", precio: 50 , categoria: "2", img: "./img/fifa22.avif", id: 4 },
    { nombre: "pes 2021", precio: 70 , categoria: "2", img: "./img/pes2021.jpg", id: 5 },
    { nombre: "wwe 22", precio: 30 , categoria: "2", img: "./img/wwe22.jpg", id: 6 },
    { nombre: "nhl 2K22", precio: 70 , categoria: "2", img: "./img/nhl2022.jpg", id: 7 },
    
    { nombre: "uncharted 4", precio: 89 , categoria: "3", img: "./img/uncharted.jpg", id: 8 },
    { nombre: "tomb raider", precio: 56 , categoria: "3", img: "./img/tombraider.jpg" , id:9 },
    
    { nombre: "call of duty", precio: 98 , categoria: "4", img: "./img/callofduty.jpg", id: 10 },
    { nombre: "counter strike", precio: 25 , categoria: "4", img: "./img/counterstrike.jpg", id: 11  },
    { nombre: "battlefield 2042", precio: 93 , categoria: "4", img: "./img/battlefield.jpg", id: 12 },
    { nombre: "god of war", precio: 8 , categoria: "4", img: "./img/godOfWar.jpg", id: 13 },

    { nombre: "league of legends", precio: 8 , categoria: "5", img: "./img/LOL.jpg" , id: 14 },
];


function crearTarjeta() {
    for (const producto of videoJuegos) {
        let card = document.createElement("div");
        card.innerHTML = ` <div class = "row"> 
                                <div class=" card text-center col-lg-3 col-md-5 col-sm-5 m-4">
                                    <img class = "card-img-top p-2 " src=${producto.img} alt="${producto.nombre}">
                                    <div class =" card-body">
                                        <h3 class = "card-title">  ${producto.nombre}</h3>
                                        <p class = "card-text"> Precio: ${producto.precio} USD</p>
                                        <button id="${producto.id}" class="p-2 bg-success m-2 text-white borderCarrito">  Agregar al Carrito </button>
                                    </div>
                                </div>
                            </div>
                            `;
        card.className = ("container")
        
        seccionProductos.append(card)



        let addCarrito = document.getElementById(`${producto.id}`);
        addCarrito.addEventListener("click", () => {
            carrito.push(producto)
            console.log(addCarrito);
            alertCarrito();
        });
    };
};
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
                                            <button id="${producto.categoria}" class="p-2 bg-success m-2 text-white borderCarrito"> Agregar <i class="fas-fa-shopping-cart"</i> </button>
                                        </div>
                                </div>`
            container.append(item);


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
    alertZA();
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
    alertZA();
}
 









  */