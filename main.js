addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = document.querySelector("#numero").value;
        for(let i = 1; i <= 10; i++){
            alert(`${numero} x ${i} = ${numero*i}`);
        }
    })
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);