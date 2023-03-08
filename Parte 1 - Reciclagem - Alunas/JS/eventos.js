function alterarNome() {
    nome.classList.remove('Is-invalid');

    if (nome.value.length > 2) {
        nome.classList.add('Is-valid');
    }
}
function alterarTelefone() {
    telefone.classList.remove('Is-invalid');

    if (telefone.value.length > 2) {
        telefone.classList.add('Is-valid');
    }
}
function alterarEmail() {
    email.classList.remove('Is-invalid');

    if (email.value.length > 2) {
        email.classList.add('Is-valid');
    }
}
function alterarCidade() {
    cidade.classList.remove('Is-invalid');

    if (cidade.value.length > 2) {
        cidade.classList.add('Is-valid');
    }
}



function validar() {
    // faz com que o formulário não seja enviado
    event.preventDefault();

    // se tu botar abaixo (nome.value === "") {} vai funcionar também, mas é melhor o comando maior
    if (document.getElementById("nome").value === "" ) {
        // nome.style.borderColor = 'red'; 
        nome.classList.add('Is-invalid');
    }

    if (document.getElementById("email").value === "" ) {
        // email.style.borderColor = 'red';
        email.classList.add('Is-invalid');
    }

    if (document.getElementById("telefone").value === "" ) {
        // telefone.style.borderColor = 'red';
        telefone.classList.add('Is-invalid');
    }

    if (document.getElementById("cidade").value === "" ) {
        // cidade.style.borderColor = 'red';
        cidade.classList.add('Is-invalid');
    }

}