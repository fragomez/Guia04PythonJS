addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let serie = document.querySelector("#serie").value;
        let serie1 = 0, serie2 = 0;
        for (let i = 1; i <= serie; i++) {
            serie1 += Math.pow(i, 2);
            serie2 += Math.pow(i, i);
        }
        document.querySelector("#serie1").innerHTML = `Serie 1: ${serie1}`;
        document.querySelector("#serie2").innerHTML = `Serie 2: ${serie2}`;
    })  
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#serie1").innerHTML = "";
    document.querySelector("#serie2").innerHTML = "";
}

addEventListener('reset', limpiar);