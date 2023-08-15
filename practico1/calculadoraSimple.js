
document.getElementById("botonCalcular").addEventListener("click", calcular);

function calcular() {
  const operand1 = parseFloat(document.getElementById("operand1").value);
  const operand2 = parseFloat(document.getElementById("operand2").value);
  const operador = document.getElementById("operador").value;
  let resultado = 0;

  switch (operador) {
    case "suma":
      resultado = operand1 + operand2;
      break;
    case "resta":
      resultado = operand1 - operand2;
      break;
    case "multiplicacion":
      resultado = operand1 * operand2;
      break;
    case "division":
      if (operand2 !== 0) {
        resultado = operand1 / operand2;
      } else {
        document.getElementById("devolucion").innerHTML= "Error: División por cero";
        return;
      }
      break;
  }
  

  document.getElementById("devolucion").innerHTML = resultado;
}
