const videoJuegos = [
        { nombre: "amoung Us", precio: "0 USD", categoria: "1" },
        { nombre: "fall Guys", precio: "0 USD", categoria: "1" },
        { nombre: "pool", precio: "0 USD", categoria: "1" },
        
        { nombre: "fifa 22", precio: "50 USD", categoria: "2" },
        { nombre: "pes 22", precio: "50 USD", categoria: "2" },
        { nombre: "pes 2K22", precio: "70 USD", categoria: "2" },
        { nombre: "wwe 22", precio: "3 USD", categoria: "2" },
        { nombre: "nhl 2K22", precio: "70 USD", categoria: "2" },
        
        { nombre: "uncharted 4", precio: "89 USD", categoria: "3" },
        { nombre: "tomb raider", precio: "56 USD", categoria: "3" },
        
        { nombre: "Call of duty", precio: "98 USD", categoria: "4" },
        { nombre: "counter strike", precio: "25 USD", categoria: "4" },
        { nombre: "battlefield 2042", precio: "93 USD", categoria: "4" },
        { nombre: "god of war", precio: "8 USD", categoria: "4" },
    
        { nombre: "league of legends", precio: "8 USD", categoria: "5" },
    
        
    ];
    
    let container = document.getElementById("container");
    for(const producto of videoJuegos){
        let item = document.createElement("div");
        item.innerHTML = `<b> ${producto.nombre}</b>
                        <p>Precio: ${producto.precio}</p>`;
    
    container.append(item);
    
    }    



/* let boton1 = document.getElementById("boton1")
boton1.addEventListener("click", ascendente)
function ascendente(){
    videoJuegos.sort((a, b) => {
        return a.nombre - b.nombre
    })
}
let boton2 = document.getElementById("boton2")
boton2.addEventListener("click", descendente)
function descendente(){
    videoJuegos.sort((a, b) => {
        return b.nombre - a.nombre
    })
}
 */



/* let boton1 = document.getElementById("boton1")
boton1.addEventListener("click", ascendente)
function ascendente(){
    videoJuegos.sort((a, b) =>{
        if (a.nombre > b. nombre) {
            return -1;
        }
        if (a.nombre < b. nombre) {
            return 1;
        }
        return 0;
    })
} */