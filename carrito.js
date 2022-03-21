class Carrito {

    añadirProducto (e) {
        if(e.target.classList.contains(`añadir`)) {
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }
    leerDatosProducto(producto){
        const infoProducto = {
            
        }
    }
}