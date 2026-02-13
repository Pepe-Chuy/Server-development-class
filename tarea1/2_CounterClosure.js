function createCounter() {
    // Privado, metodos para sumar, restar o settear a 0
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



///// USE
const contador = crearContador();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.disminuir();

console.log(contador.obtenerCuenta()); // tenemos 2
