function calculadora(operacion, a, b) {
  switch (operacion) {
    case 'suma':
      return a + b;
    case 'resta':
      return a - b;
    case 'multiplicacion':
      return a * b;
    case 'division':
      if (b === 0) {
        return 'Error: División por cero';
      }
      return a / b;
    default:
      return 'Operación no válida';
  }
}

// Ejemplos de uso:
console.log(calculadora('suma', 5, 3));         // 8
console.log(calculadora('resta', 10, 4));       // 6
console.log(calculadora('multiplicacion', 2, 6)); // 12
console.log(calculadora('division', 15, 3));    // 5
console.log(calculadora('division', 7, 0));     // Error: División por cero
console.log(calculadora('potencia', 2, 3));     // Operación no válida
