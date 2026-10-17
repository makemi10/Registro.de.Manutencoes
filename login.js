/** 
async function login() {

    const email =
    document.getElementById("email").value;

    const senha =
    document.getElementById("senha").value;

    const resposta =
    await fetch(
        "http://localhost:3000/login",
        {

            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify({

                email,
                senha

            })

        }
    );

    const dados =
    await resposta.json();

    if(dados.sucesso){

        localStorage.setItem(

            "usuarioLogado",

            dados.nome

        );

        window.location.href =
        "manutencao.html";

    }
    else{

        alert(
            "Usuário ou senha inválidos."
        );

    }
}
*/
/** 
async function login() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch(
        "http://localhost:3000/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                senha
            })
        }
    );

    const dados = await resposta.json();

    alert(dados.mensagem);

    if (dados.sucesso) {
        window.location.href = "/manutencao";
    }
}
*/
/**
async function login() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch(
        "http://localhost:3000/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                senha
            })
        }
    );


const dados = await resposta.json();

console.log(dados);

alert(dados.mensagem);

if (dados.sucesso) {
    window.location.href = "/manutencao";
}
}
*/

/**deu certo! 
async function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            senha
        })
    }); */



    /**const dados = await resposta.json();

    console.log("RETORNO:", dados);

    alert(JSON.stringify(dados)); */

    /**const dados = await resposta.json();

    console.log(dados);

    if (dados.sucesso) {
        alert(`Bem-vindo(a), ${dados.nome}!`);
    } else {
        alert(dados.mensagem);
} */

        /**  deu certo!
const dados = await resposta.json();

if (dados.sucesso) {

    alert(`Bem-vindo(a), ${dados.nome}!`);

    window.location.href = "/manutencao";

} else {

    alert(dados.mensagem);

}*/

/** }*/

async function login() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            senha
        })
    });

    const dados = await resposta.json();

        window.location.href = "manutencao.html";

}