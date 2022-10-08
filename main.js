addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia4");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let cantNumeros = document.querySelector("#cantNumeros").value;
        let numero = parseInt(prompt("Ingrese el número 1")).value;
        let suma = numero, resta = numero, multiplicacion = numero, division = numero;
        for (let i = 1; i <= serie; i++) {
            let numero2 = parseInt(prompt(`Ingrese el número ${i+1}`));
            suma += numero2;
            resta -= numero2;
            multiplicacion *= numero2;
            division /= numero2;
        }
        document.querySelector("#suma").innerHTML = `El resultado de la suma es ${suma}`;
        document.querySelector("#resta").innerHTML = `El resultado de la resta es ${suma}`;
        document.querySelector("#multiplicacion").innerHTML = `El resultado de la multiplicación es ${suma}`;
        document.querySelector("#division").innerHTML = `El resultado de la división es ${suma}`;
    })  
})

function limpiar() {
    document.querySelector("#guia4").reset();
    document.querySelector("#suma").innerHTML = "";
    document.querySelector("#resta").innerHTML = "";
    document.querySelector("#multiplicacion").innerHTML = "";
    document.querySelector("#division").innerHTML = "";
}

addEventListener('reset', limpiar);