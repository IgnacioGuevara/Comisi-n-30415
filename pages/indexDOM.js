const videoJuegos = [
        { nombre: "amoung Us", precio: 0 , categoria: "1" },
        { nombre: "fall Guys", precio: 0 , categoria: "1" },
        { nombre: "pool", precio: 0 , categoria: "1" },
        
        { nombre: "fifa 22", precio: 50 , categoria: "2" },
        { nombre: "pes 22", precio: 50 , categoria: "2" },
        { nombre: "pes 2K22", precio: 70 , categoria: "2" },
        { nombre: "wwe 22", precio: 3 , categoria: "2" },
        { nombre: "nhl 2K22", precio: 70 , categoria: "2" },
        
        { nombre: "uncharted 4", precio: 89 , categoria: "3" },
        { nombre: "tomb raider", precio: 56 , categoria: "3" },
        
        { nombre: "call of duty", precio: 98 , categoria: "4" },
        { nombre: "counter strike", precio: 25 , categoria: "4" },
        { nombre: "battlefield 2042", precio: 93 , categoria: "4" },
        { nombre: "god of war", precio: 8 , categoria: "4" },
    
        { nombre: "league of legends", precio: 8 , categoria: "5" },
    
        
    ];
    
    function cargarPoductos(lista) {
        container.innerHTML = "";
        for (const producto of lista) {
            let item = document.createElement("div");
            item.innerHTML = `<b> ${producto.nombre}</b>
                                <p>precio: ${producto.precio}</p>`
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


