addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let mensualidad = 0, total = 0;
        for(let mes = 1; mes <= 20; mes++){
            if(mes ==1){
                mensualidad = 10;
            } else {
                mensualidad = mensualidad * 2;
            }
            alert(`El pago en el mes ${mes} es: ${mensualidad}`)
            
        }
        total += mensualidad;
        document.querySelector("#resultado").innerHTML = `El pago total es: ${total}`
    })
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);