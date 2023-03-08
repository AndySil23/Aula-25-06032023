if(localStorage.getItem('darkmode') === "true") {
    dark.checked = true;
    alterarCores();
} //essa função aqui deixa a marcação que foi feita no input. Um if colocado fora de uma função vai ser executado independentemente

function alterarCores() {
    if(dark.checked) { // essa função à direita salva no LocalStorage o estado do botão do darkmode
        document.body.classList.add('bg-dark');
        document.body.classList.add('text-white');
        tabela.classList.add('table-dark');
    } else{
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('text-white');
        tabela.classList.remove('table-dark');
    }

}

function ativarDarkmode() {
      if (dark.checked) {
        localStorage.setItem('darkmode', true);
     } else {
        localStorage.setItem('darkmode', false);
     }

     alterarCores();
}


// /////////////////////ARRAY DE OBJETOS - AULA CD (GLEIDSON) 27022023///////////////////////////////////




let alunos = [
    {
        id: 0,
        nome: "Ana Kelly",
        email: "anakelly1@email.com",
        telefone: "(66)66666-6666",
        cidade: "Fortaleza",
    },
    {
        id: 1,
        nome: "Andy Silva",
        email: "andysilva1@email.com",
        telefone: "(77)77777-7777",
        cidade: "São Paulo",
    },
    {
        id: 2,
        nome: "Sulamita",
        email: "sulamita1@email.com",
        telefone: "(88)88888-8888",
        cidade: "Teresina",
    },
    {
        id: 3,
        nome: "Dani Lins",
        email: "danilins1@email.com",
        telefone: "(99)99999-9999",
        cidade: "Curitiba",
    },
    {
        id: 4,
        nome: "Carly",
        email: "carly1@email.com",
        telefone: "(00)00000-0000",
        cidade: "Rio de Janeiro",
    },
];

let tabelabody = document.getElementById("tabela-body");

alunos.forEach( (aluno) => {

tabelabody.innerHTML += `<tr>
                        <td>${aluno.id}</td>
                        <td>${aluno.nome}</td>
                        <td>${aluno.email}</td>
                        <td>${aluno.telefone}</td>
                        <td>${aluno.cidade}</td>
                        <td>
                            <button class="btn btn-warning">Editar</button>
                            <button class="btn btn-danger">Excluir</button>
                        </td>
                    </tr>`;
});

function salvarAluno() {
event.preventDefault();

let aluno = () => {
    nome: nome.value
    email: email.value
    telefone: telefone.value
    cidade: cidade.value
}

}