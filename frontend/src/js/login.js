function acessarSite(email, senha) {
    if (email == 'davidmoreira@gmail.com' && senha == 'insted') {
        window.location.assign("http://127.0.0.1:5500/index.html")
    } else {
        alert('Usuário ou senha inválidos')
    }
}

function verificaCamposLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    (verificaEmail(email)) ? acessarSite(email, senha) : null;
}

function verificaCampos() {
    msg = [];
    if(!email)msg.push("- O preenchimento do campo de email é obrigatório!");
    if(!senha)msg.push("- O preenchimento do campo de senha é obrigatório!");

    if(msg.length>0)
    alert(msg.join("\n"));

    return msg.length == 0;
}
    
function verificaEmail(email) {
    if (email.includes("@")) {
        return true
    } else {
        alert("Endereço de email inválido! Certifique-se de digitar o caractere '@'")
        return false
    }
}