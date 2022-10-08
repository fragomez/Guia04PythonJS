addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let angulo = document.querySelector("#angulo").value;
        let serie = document.querySelector("#serie").value;
        let resultado = 0, numero = 3, factor = 1;
        for (let i = 1; i <= serie; i++) {
            for (let j = 1; j <= numero; j++) {
                factor *= j;
            }
            if (i % 2 == 0) {
                resultado += (angulo * numero) / factor;
                numero += 2;
            } else {
                resultado -= (angulo * numero) / factor;
                numero += 2;
            }
        }
        document.querySelector("#resultado").innerHTML = `El seno del ángulo ${angulo} es: ${resultado}`;
    })  
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);