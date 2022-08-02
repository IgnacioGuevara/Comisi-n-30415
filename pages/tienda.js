fetch("./index.json")
    .then(r => r.json())
    .then(productos => {
        productos.forEach(producto => {
            const li = document.createElement('div');
                        li.innerHTML = `
                        <div class ="container listaTienda">
                            <h2 class = "nombreTienda mb-5"> ${producto.nombre}</h2>
                            <p class = "precioId">${producto.precio} usd</p>
                            <p class = "precioId"> id: ${producto.id}</p>

                        </div>`;  
            lista.append(li);
        });
    }).catch(error => console.log(error));