function criptografarMensagem() {
    let entrada = document.getElementById("entrada").value;
    let metade = Math.floor(entrada.length / 2);
    let resultado = "";
  
    // Passo 1: Deslocar as letras 3 posições para a direita
    for (let i = 0; i < entrada.length; i++) {
      let charCode = entrada.charCodeAt(i);
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        resultado += String.fromCharCode(charCode + 3);
      } else {
        resultado += entrada[i];
      }
    }
  
    // Passo 2: Inverter a mensagem
    resultado = resultado.split("").reverse().join("");
  
    // Passo 3: Deslocar os caracteres da metade em diante uma posição para a esquerda
    for (let i = metade; i < resultado.length; i++) {
      let charCode = resultado.charCodeAt(i);
      resultado = resultado.substring(0, i) + String.fromCharCode(charCode - 1) + resultado.substring(i + 1);
    }
  
    document.getElementById("resultado").value = resultado;
}