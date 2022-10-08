addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let ventasMayores = 0, ventasMayores500 = 0, ventasMenores = 0, totalVentas = 0;
        let cantVentas = document.querySelector("#cantVentas").value;
        for(let i = 1; i <= cantVentas; i++){
            let venta = parseInt(prompt("Ingrese el valor de la venta " + i));
            if(venta > 1000){
                ventasMayores++;
            }
            if(venta > 500 && venta <= 1000){
                ventasMayores500++;
            }
            if(venta <= 500){
                ventasMenores++;
            }
            totalVentas += venta;
        }
        
        document.querySelector("#mayores").innerHTML = `Total de ventas mayores a 1000: ${ventasMayores}`;
        document.querySelector("#mayores500").innerHTML = `Total de ventas mayores a 500 pero menores o iguales a 1000: ${ventasMayores500}`;
        document.querySelector("#menores").innerHTML = `Total de ventas menores a 500: ${ventasMenores}`;
        document.querySelector("#resultado").innerHTML = `Total de ventas: ${totalVentas}`;
    })
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#mayores").innerHTML = "";
    document.querySelector("#mayores500").innerHTML = "";
    document.querySelector("#menores").innerHTML = "";
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);