function decimalParaBase(decimal, base) {
    var numeroInteiro = Math.floor(decimal);
    var resto = decimal - numeroInteiro;
    var resultado = "";
    var digitos = "0123456789ABCDEF";
  
    while (numeroInteiro > 0) {
      resultado = digitos[numeroInteiro % base] + resultado;
      numeroInteiro = Math.floor(numeroInteiro / base);
    }
  
    if (resto > 0) {
      resultado += ".";
      while (resto > 0) {
        resto *= base;
        resultado += digitos[Math.floor(resto)];
        resto -= Math.floor(resto);
      }
    }
  
    return resultado;
  }
  
  function decimalParaBinario(decimal) {
    return decimalParaBase(decimal, 2);
  }
  
  function decimalParaOctal(decimal) {
    return decimalParaBase(decimal, 8);
  }
  
  function decimalParaHexadecimal(decimal) {
    return decimalParaBase(decimal, 16).toUpperCase();
  }
  
  function converterBases() {
    const decimal = parseFloat(document.getElementById("decimal").value);
    const binario = decimalParaBinario(decimal);
    const octal = decimalParaOctal(decimal);
    const hexadecimal = decimalParaHexadecimal(decimal);
  
    document.getElementById("binario").value = binario;
    document.getElementById("octal").value = octal;
    document.getElementById("hexadecimal").value = hexadecimal;
    document.getElementById("resultado").innerHTML = "Convertido com sucesso";
  }
  
  document.getElementById("decimal").addEventListener("input", converterBases);
  document.getElementById("binario").addEventListener("input", function() {
    const binario = this.value;
    const decimal = parseInt(binario, 2);
    const octal = decimalParaOctal(decimal);
    const hexadecimal = decimalParaHexadecimal(decimal);
  
    document.getElementById("decimal").value = decimal;
    document.getElementById("octal").value = octal;
    document.getElementById("hexadecimal").value = hexadecimal;
  });
  
  document.getElementById("octal").addEventListener("input", function() {
    const octal = this.value;
    const decimal = parseInt(octal, 8);
    const binario = decimalParaBinario(decimal);
    const hexadecimal = decimalParaHexadecimal(decimal);
  
    document.getElementById("decimal").value = decimal;
    document.getElementById("binario").value = binario;
    document.getElementById("hexadecimal").value = hexadecimal;
  });
  
  document.getElementById("hexadecimal").addEventListener("input", function() {
    const hexadecimal = this.value;
    const decimal = parseInt(hexadecimal, 16);
    const binario = decimalParaBinario(decimal);
    const octal = decimalParaOctal(decimal);
  
    document.getElementById("decimal").value = decimal;
    document.getElementById("binario").value = binario;
    document.getElementById("octal").value = octal;
  });
  
  // Adicionar evento para detectar a tecla "Enter" pressionada
  let inputs = document.querySelectorAll("input[type=text]");
  inputs.forEach(function (input) {
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        converterBases();
      }
    });
  });
  