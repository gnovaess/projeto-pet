function verificaCampos() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    var eValido = validaFormulario(nome, email, senha1, senha2);
    
    if(eValido){
        if (verificaEmail(email)) {
            if (verificaSenha(senha1)) {
                var usuario = salvarUsuario(email, senha1)
                if (usuario) 
                    window.location.assign("http://127.0.0.1:5500/index.html")
            }
        }
    }
}

function verificaEmail(email) {
    if (email.includes("@")) {
        return true
    } else {
        alert("Endereço de email inválido! Certifique-se de digitar o caractere '@'")
        return false
    }
}

function validaFormulario(nome, email, senha1, senha2){
    var msg = [];
    if(!nome)msg.push("- O preenchimento do campo de nome é obrigatório!");
    if(!email)msg.push("- O preenchimento do campo de email é obrigatório!");
    if(!senha1)msg.push("- O preenchimento do campo de senha é obrigatório!");
    if(!senha2)msg.push("- O preenchimento do campo de confirmação de senha é obrigatório!");
    if(senha1 != senha2)msg.push("Ops! Parece que as senhas não coincidem. Por favor, verifique novamente.")

    if(msg.length>0)
        alert(msg.join("\n"));
    
    return msg.length == 0;
}

function verificaSenha(senha) {
    var msg = [];
    let temLetraMaiuscula = /[A-Z]/.test(senha); 
    let temNumero = /\d/.test(senha);
    let temCaractereEspecial = /[!@#$%^&*()\-=_+{}[\]:;'"|,.<>/?]/.test(senha); 
    if (temLetraMaiuscula && temNumero && temCaractereEspecial) {
        alert(`Senha: ${senha}, válida`)
        return true
    } else {
        if(!temLetraMaiuscula)msg.push("- A senha deve conter pelo menos uma letra maiúscula")
        if(!temNumero)msg.push("- A senha deve conter pelo menos um número")
        if (!temCaractereEspecial)msg.push("- A senha deve conter pelo menos um caracter especial")
        alert(msg.join("\n"))
        return false
    }
}

function salvarUsuario(email, senha, nome) {
    if (email && senha) {
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };
        return usuario;
    }
    return null
}