const videoJuegos = [
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
    

    function cargarPoductos(lista) {
        container.innerHTML = "";
        for (const producto of lista) {
            let item = document.createElement("div");
            item.innerHTML = `  <img class = "cardImg" src=${producto.img}>
                                <div class =" card-body" >
                                    <b class =  "card-title" > nombre ${producto.nombre}</b>
                                    <p class = "card-text" > precio: ${producto.precio}</p>
                                </div>`
            container.append(item)
        }
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
    }




