addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let cantEstudiantes = document.querySelector("#cantEstudiantes").value;
        let notaFinal = 0, menor = 10, mayor = 0;
        for(let i = 1; cantEstudiantes >= i; i++){
            let calificacion = parseInt(prompt("Ingrese la calificación de la cafereria"));
            notaFinal += calificacion;
            if(calificacion > mayor){
                mayor = calificacion;
            } else if (calificacion < menor){
                menor = calificacion;
            } else {
                menor = calificacion;
            }
        }
        let promedio = notaFinal / cantEstudiantes;
        document.querySelector("#menor").innerHTML = `La calificación menor es: ${menor}`;
        document.querySelector("#mayor").innerHTML = `La calificación mayor es: ${mayor}`; 
        document.querySelector("#resultado").innerHTML = `La calificación promedio de la cafeteferia es: ${promedio}`
    })
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#menor").innerHTML = "";
    document.querySelector("#mayor").innerHTML = "";
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);