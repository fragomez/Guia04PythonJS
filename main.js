addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let trabajadores = document.querySelector("#cantTrabajadores");
        for(let i = 1; i <= trabajadores; i++){
            let nombreTrabajador = prompt("Ingrese el nombre del trabajador " + i);
            let sueldoTrabajador = parseInt(prompt("Ingrese el sueldo del trabajador " + i));
            let tiempoServicio = parseInt(prompt("Ingrese el tiempo de servicio del trabajador " + i));
            if(tiempoServicio >=1 && tiempoServicio < 5){
                sueldoTrabajador = sueldoTrabajador + 100;
                document.querySelector("#resultado").innerHTML = `El sueldo total del trabajador es: ${sueldoTrabajador}`;
            }
            if(tiempoServicio >= 5 && tiempoServicio < 10){
                sueldoTrabajador = sueldoTrabajador + 250;
                document.querySelector("#resultado").innerHTML = `El sueldo total del trabajador es: ${sueldoTrabajador}`;
            }
            if(tiempoServicio >= 10 && tiempoServicio < 20){
                sueldoTrabajador = sueldoTrabajador + 400;
                document.querySelector("#resultado").innerHTML = `El sueldo total del trabajador es: ${sueldoTrabajador}`;
            }
            if(tiempoServicio >= 20){
                sueldoTrabajador = sueldoTrabajador + 550;
                document.querySelector("#resultado").innerHTML = `El sueldo total del trabajador es: ${sueldoTrabajador}`;
            }
        }
    })
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);