function createCounter() {
    // Privado
    let total = 0;
    
    return {
        incrementar(){
            total++;
        },
    
        disminuir(){
            total--;
        },

        reset(){
            total=0;
        },

        obtenerCuenta(){
            return total;
        }

    }
    
}




const contador = crearContador();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.disminuir();

console.log(contador.obtenerCuenta()); // tenemos 2
