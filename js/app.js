function calcular() {
  const formulario = document.getElementById("formulario").innerHTML;
  let operadorA = document.getElementById("operadorA");
  let operadorB = document.getElementById("operadorB");

  let resultado = parseInt(operadorA.value) + parseInt(operadorB.value);
  if (isNaN(resultado)) {
    document.getElementById("resultado").innerHTML = "No se puede realizar la operación!!!";
  } else {
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  }
}
