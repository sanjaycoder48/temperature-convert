function celsius() {
  const input = parseFloat(document.getElementById("input").value);
  if (isNaN(input)) {
    document.getElementById("celsius-value").textContent = "In  valid input";
    return;
  }

  document.getElementById("celsius-value").textContent =
    input.toFixed(2) + "°C";
  const celsius = ((input - 32) * 5) / 9;
  document.getElementById("celsius-value").textContent =
    celsius.toFixed(2) + "°C";
}

function fahrenheit() {
  const input = parseFloat(document.getElementById("input").value);
  if (isNaN(input)) {
    document.getElementById("fahrenheit-value").textContent = "Invalid input";
    return;
  }

  document.getElementById("fahrenheit-value").textContent =
    input.toFixed(2) + "°F";
  const fahrenheit = (input * 9) / 5 + 32;
  document.getElementById("fahrenheit-value").textContent =
    fahrenheit.toFixed(2) + "°F";
}

function kelvin() {
  const input = parseFloat(document.getElementById("input").value);
  if (isNaN(input)) {
    document.getElementById("kelvin-value").textContent = "Invalid input";
    return;
  }

  document.getElementById("kelvin-value").textContent = input.toFixed(2) + "K";
  const kelvin = input + 273.15;
  document.getElementById("kelvin-value").textContent = kelvin.toFixed(2) + "K";
}
