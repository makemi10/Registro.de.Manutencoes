/** 
async function cadastrar() {

    const nome =
    document.getElementById("nome").value;

    const email =
    document.getElementById("email").value;

    const senha =
    document.getElementById("senha").value;

    if(!nome || !email || !senha){

        alert(
            "Preencha todos os campos."
        );

        return;
    }

    const resposta =
    await fetch(
        "http://localhost:3000/cadastro",
        {

            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify({

                nome,
                email,
                senha

            })

        }
    );

    const dados =
    await resposta.json();

    alert(dados.mensagem);

    window.location.href =
    "index.html";
}
*/


async function cadastrar() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch(
        "http://localhost:3000/cadastro",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                senha
            })
        }
    );

    const dados = await resposta.json();

    window.location.href = "index.html";
}

