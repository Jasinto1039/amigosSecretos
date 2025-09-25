function calcular(op) {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let res = "";

  if (isNaN(n1) || isNaN(n2)) {
    res = "Digite dois números!";
  } else {
    switch(op) {
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/": res = n2 !== 0 ? n1 / n2 : "Erro: divisão por zero"; break;
    }
  }

  document.getElementById("resultado").textContent = res;
}
