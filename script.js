// Insertar números u operadores en la pantalla
function insert(value) {
  document.getElementById("result").value += value;
}

// Borrar todo
function clearResult() {
  document.getElementById("result").value = "";
}

// Borrar último carácter
function deleteChar() {
  let current = document.getElementById("result").value;
  document.getElementById("result").value = current.slice(0, -1);
}

// Calcular el resultado de la expresión
function calculate() {
  try {
    let expression = document.getElementById("result").value;
    document.getElementById("result").value = eval(expression);
  } catch (e) {
    document.getElementById("result").value = "Error";
  }
}

// Potencia al cuadrado
function power() {
  let current = document.getElementById("result").value;
  if (current) {
    document.getElementById("result").value = Math.pow(parseFloat(current), 2);
  }
}

// Raíz cuadrada
function sqrt() {
  let current = document.getElementById("result").value;
  if (current) {
    document.getElementById("result").value = Math.sqrt(parseFloat(current));
  }
}

// Factorial (n!)
function factorial() {
  let current = document.getElementById("result").value;
  let n = parseInt(current);
  if (isNaN(n) || n < 0) {
    document.getElementById("result").value = "Error";
    return;
  }
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  document.getElementById("result").value = fact;
}

// Convertir a fracción (ejemplo simple)
function toFraction() {
  let current = parseFloat(document.getElementById("result").value);
  if (isNaN(current)) {
    document.getElementById("result").value = "Error";
    return;
  }

  // Aproximación de fracción
  let denominator = 1000;
  let numerator = Math.round(current * denominator);
  let gcd = (a, b) => (b ? gcd(b, a % b) : a);
  let divisor = gcd(numerator, denominator);

  numerator /= divisor;
  denominator /= divisor;

  document.getElementById("result").value = `${numerator}/${denominator}`;
}

// Conversión simple de unidades (ejemplo: metros a kilómetros y viceversa)
function convertUnits() {
  let current = parseFloat(document.getElementById("result").value);
  if (isNaN(current)) {
    document.getElementById("result").value = "Error";
    return;
  }

  // Si es mayor a 1000, lo pasamos a km; si no, a metros
  if (current >= 1000) {
    document.getElementById("result").value = (current / 1000) + " km";
  } else {
    document.getElementById("result").value = (current * 1000) + " m";
  }
}
