const calcularBtn = document.getElementById("calcular-btn");

calcularBtn.addEventListener("click", function() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operacion = document.querySelector('input[name="operacion"]:checked').value;

    let resultado;
    
    switch(operacion){
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operacion Inválida";
            break;
    }

    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
});