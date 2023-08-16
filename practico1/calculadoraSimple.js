
document.getElementById("botonCalcular").addEventListener("click", calcular);
/**funcion que realiza los calculos  */
function calcular() {
  const operand1 = parseFloat(document.getElementById("operand1").value);
  const operand2 = parseFloat(document.getElementById("operand2").value);
  const operador = document.getElementById("operador").value;
  let resultado = 0;
/**esta parte realiza lo indicado, segun el signo que elijamos como operador*/
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
        /**esto devuelve si dividimos por cero */
        document.getElementById("devolucion").innerHTML= "Error: División por cero";
        return;
      }
      break;
  }
  
/**esta parte devuelve la variable obtenida como resultado despues de aplicar la funcion y la envia al html */
  document.getElementById("devolucion").innerHTML = resultado;
}
