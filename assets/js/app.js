let form = document.getElementById('sign-up')

let nome = document.getElementById('nome');
let sobrenome = document.getElementById('sobrenome');
let email = document.getElementById('email');
let senha = document.getElementById('senha');

let mensagemDeErro = document.querySelectorAll('.sign-up-input-error')

function limparOsErros() {
    nome.classList.remove('error-input')
    sobrenome.classList.remove('error-input')
    email.classList.remove('error-input')
    senha.classList.remove('error-input')
    mensagemDeErro.forEach(e => e.innerHTML = '')
}

function verificarInputs() {
    let erros = [];
    let regexParaValidarEmail = "^\\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"

    limparOsErros()

    if(!nome.value) erros.push({input: nome, error: 'Este campo é obrigatório'})
    if(!sobrenome.value) erros.push({input: sobrenome, error: 'Este campo é obrigatório'})
    if(!email.value.match(regexParaValidarEmail)) erros.push({input: email, error: 'Email inválido'})
    if(!email.value) erros.push({input: email, error: 'Este campo é obrigatório'})
    if(!senha.value) erros.push({input: senha, error: 'Este campo é obrigatório'})

    
    return erros;
}

function mostrarOsErros() {
    verificarInputs().forEach(erro => {
        erro.input.classList.add('error-input')

        switch(erro.input) {
            case nome:
                mensagemDeErro[0].innerHTML = erro.error
                break;
            case sobrenome:
                mensagemDeErro[1].innerHTML = erro.error
                break;
            case email:
                mensagemDeErro[2].innerHTML = erro.error
                break;
            case senha:
                mensagemDeErro[3].innerHTML = erro.error
                break;

        }

    })
}

form.addEventListener('submit', (e) => {
    mostrarOsErros()
    e.preventDefault()
})
