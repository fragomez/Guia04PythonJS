addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let i = 1;
        for(let j = 1; j < 21; j++){
            if(j %2 != 0){
                alert(i);
                i += 4;
            } 
            if (j %2 == 0){
                alert(i);
                i -= 2;
            } 
        }
    })
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);