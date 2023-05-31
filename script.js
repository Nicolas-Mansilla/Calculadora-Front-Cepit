"use strict"



  let resultado = document.getElementById("resultado");
  let operando1 = "";
  let operando2 = "";
  let operacionActual = null;

  function agregarNumero(numero) {
    if (operacionActual === null) {
      operando1 += numero;
      resultado.value = operando1;
    } else {
      operando2 += numero;
      resultado.value = operando2;
    }
  }

  function agregarDecimal(decimal) {
    if (operacionActual === null) {
      if (!operando1.includes(decimal)) {
        operando1 += decimal;
        resultado.value = operando1;
      }
    } else {
      if (!operando2.includes(decimal)) {
        operando2 += decimal;
        resultado.value = operando2;
      }
    }
  }

  function agregarOperacion(callback) {
    operacionActual = callback;
  }

  function realizarOperacion() {
    let num1 = parseFloat(operando1);
    let num2 = parseFloat(operando2);
    let resultadoOperacion = operacionActual(num1, num2);

    resultado.value = resultadoOperacion;
    operando1 = resultadoOperacion.toString();
    operando2 = "";
    operacionActual = null;
  }

  function suma(a, b) {
    return a + b;
  }

  function resta(a, b) {
    return a - b;
  }

  function mult(a, b) {
    return a * b;
  }

  function div(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      alert("No se puede dividir entre cero");
      return 0;
    }
  }

  function limpiar() {
    operando1 = "";
    operando2 = "";
    operacionActual = null;
    resultado.value = "";
  }
