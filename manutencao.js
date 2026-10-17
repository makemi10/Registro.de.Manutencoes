/** 
async function salvarManutencao() {

    alert("Entrou na função!");

    const numero_maquina =
        document.getElementById("numero_maquina").value;

    const data_manutencao =
    document.getElementById("data_manutencao").value;

    const descricao =
    document.getElementById("descricao").value;

    const motivo =
    document.getElementById("motivo").value;

    const tecnico =
    document.getElementById("tecnico").value;

    const status =
    document.getElementById("status").value;

    alert("Antes do fetch");

const resposta =
await fetch(
    "http://localhost:3000/manutencao",
        {
            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify({

                numero_maquina,
                data_manutencao,
                descricao,
                motivo,
                tecnico,
                status

            })
        }
    );

    const dados =
    await resposta.json();

    alert(dados.mensagem);

}*/

async function salvarManutencao() {

    try {

        const numero_maquina =
            document.getElementById("numero_maquina").value;

        const data_manutencao =
            document.getElementById("data_manutencao").value;

        const descricao =
            document.getElementById("descricao").value;

        const motivo =
            document.getElementById("motivo").value;

        const tecnico =
            document.getElementById("tecnico").value;

        const status =
            document.getElementById("status").value;

        console.log("Dados enviados:", {
            numero_maquina,
            data_manutencao,
            descricao,
            motivo,
            tecnico,
            status
        });

        const resposta = await fetch(
            "http://localhost:3000/manutencao",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    numero_maquina,
                    data_manutencao,
                    descricao,
                    motivo,
                    tecnico,
                    status
                })
            }
        );

        const dados = await resposta.json();

        console.log("Resposta:", dados);

        alert(dados.mensagem);

    } catch (erro) {

        console.error("Erro:", erro);

        alert("Erro ao conectar com o servidor!");

    }


}
