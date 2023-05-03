function criptografarMensagem() {
    let entrada = document.getElementById("entrada").value;
    let resultado = "";

    // Deslocar letras 3 posições para a direita
    for (let i = 0; i < entrada.length; i++) {
        let charCode = entrada.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 87) || (charCode >= 97 && charCode <= 119)) {
            resultado += String.fromCharCode(charCode + 3);
        } else if ((charCode >= 88 && charCode <= 90) || (charCode >= 120 && charCode <= 122)) {
            resultado += String.fromCharCode(charCode - 23);
        } else {
            resultado += entrada.charAt(i);
        }
    }

    // Inverter a linha
    resultado = resultado.split("").reverse().join("");

    // Deslocar caracteres da metade para a esquerda
    let metade = Math.floor(resultado.length / 2);
    for (let i = metade; i < resultado.length; i++) {
        let charCode = resultado.charCodeAt(i);
        if ((charCode >= 66 && charCode <= 90) || (charCode >= 98 && charCode <= 122)) {
            resultado = resultado.substr(0, i) + String.fromCharCode(charCode - 1) + resultado.substr(i + 1);
        } else if (charCode === 65) {
            resultado = resultado.substr(0, i) + String.fromCharCode(90) + resultado.substr(i + 1);
        } else if (charCode === 97) {
            resultado = resultado.substr(0, i) + String.fromCharCode(122) + resultado.substr(i + 1);
        }
    }

    document.getElementById("resultado").value = resultado;
}

function autenticar() {
  let nomeDeUsuario = "usuario";
  let senha = "senha123";
  
  let inputUsuario = document.getElementById("usuario").value;
  let inputSenha = document.getElementById("senha").value;
  
  if (inputUsuario === nomeDeUsuario && inputSenha === senha) {
    alert("Autenticado com sucesso!");
    // continuar com a lógica do seu programa
  } else {
    alert("Nome de usuário ou senha incorretos. Tente novamente.");
  }
}

// Defina um objeto de usuários autorizados com nome de usuário e senha
const authorizedUsers = {
    "lorenna": "lorenna123",
    "simone": "simone123",
    "iury": "iury123"
};

// Capture o formulário de login e adicione um listener para o evento submit
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Verifique se o nome de usuário e senha correspondem a um usuário autorizado
    if (authorizedUsers[username] && authorizedUsers[username] === password) {
        // Acesso permitido: exiba o formulário de criptografia
        document.getElementById("encryption-form").style.display = "block";
        loginForm.style.display = "none";
    } else {
        // Acesso negado: exiba uma mensagem de erro
        alert("Nome de usuário ou senha incorretos.");
    }
});

// Adicione um listener para o evento submit no formulário de criptografia
const encryptionForm = document.getElementById("encryption-form");
encryptionForm.addEventListener("submit", function(event) {
    event.preventDefault();
    criptografarMensagem();
});
