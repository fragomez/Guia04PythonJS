addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        const iva = 0.16, descuento = 0.15, precio = 100000;
        let total = 0;
        let cantProductos = document.querySelector("#cantProductos").value;
        for (let i = 1; i <= cantProductos; i++) {
            total += precio;
        }
        let totalPagar = total(total * iva);
        if (totalPagar > 500000){
            let totalDescuento = totalPagar - (totalPagar * descuento);
            document.querySelector("#resultado").innerHTML = `El total a pagar es: ${totalDescuento}`;
        } else {
            document.querySelector("#resultado").innerHTML = `El total a pagar es: ${totalPagar}`;
        }
    })  
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);