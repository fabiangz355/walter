function calcularRaices() {

    let numero = parseFloat(document.getElementById("numero").value);


    if (numero > 6) {

        let raizCuadrada = Math.sqrt(numero);
        let raizCubica = Math.cbrt(numero);

        document.getElementById("raizCuadrada").textContent = raizCuadrada;
        document.getElementById("raizCubica").textContent = raizCubica;
    } else {
        alert("El número debe ser mayor que 6.");
    }
}