const questionario = document.querySelector(".questionario");
const main = document.querySelector("main");
const inputs = document.querySelectorAll(".caixaDoInput input")

let tecnologias = [

]


let perguntasRespondidas = false;
let inserirPerguntas = false;

const mostrarTecnologias  = () =>{
    main.innerHTML = "<h1>As linguagem que você esta interessado são:</h1>"
    tecnologias.forEach(tecnologia =>{
        const CaixaDaTecnologia = document.createElement("h2")
        CaixaDaTecnologia.innerHTML = tecnologia
        main.appendChild(CaixaDaTecnologia)
    })
}




function criarPergunta(pergunta, respostas, questionario) {
    main.innerHTML = '';
    
    if (questionario) {


        function adicionarTecnologia(tecnologia) {
            
            const inputsPreenchidos = [...document.querySelectorAll(".caixaDoInput input")].every(input => input.value.trim() !== "");

           if(tecnologia != ""){
            tecnologias.push(tecnologia);
            
            
           }
           if (inputsPreenchidos) {
            MaisTecnologias();
        }
           
            
        }

        function MaisTecnologias(){
            const CaixaDeAddMais = document.createElement("section")
            CaixaDeAddMais.innerHTML = "<h2>Deseja add mais tecnologias?</h2>"

            const BotãoSim = document.createElement("button")
            BotãoSim.innerHTML = "Sim"
            BotãoSim.addEventListener("click" , ()=>{

                const InputsNumero = document.createElement("input")
                InputsNumero.type = "number"


                const BotãoDeEnvio = document.createElement("button")
                BotãoDeEnvio.innerHTML = "Enviar"
                BotãoDeEnvio.addEventListener("click" ,()=>{
                    CriarInput(InputsNumero.value)
                    CaixaDeAddMais.remove()

                })

                CaixaDeAddMais.innerHTML = `<h2>Quantos inputs deseja</h2>
                `
                CaixaDeAddMais.appendChild(InputsNumero)
                CaixaDeAddMais.appendChild(BotãoDeEnvio)
            })

            
            const BotãoNão = document.createElement("button")
            BotãoNão.innerHTML = "Não"
            BotãoNão.addEventListener("click", mostrarTecnologias)

            const Botões = document.createElement("div")
            Botões.classList.add("botõesTecnlogia")


            Botões.appendChild(BotãoSim)
            Botões.appendChild(BotãoNão)
            CaixaDeAddMais.appendChild(Botões)
            CaixaDeAddMais.classList.add("addMais")
            CaixaDeRespostas.appendChild(CaixaDeAddMais)
        }


        function CriarInput(quantidade) {

            for(let i=0; i<quantidade; i++){
                const CaixaDeInput = document.createElement("div");
            CaixaDeInput.classList.add("caixaDoInput");

            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 15;

            const CaixaDosBotões = document.createElement("div")


            const botaoAdd = document.createElement("button");
            botaoAdd.classList.add("add");
            botaoAdd.innerText = "➕";
            botaoAdd.addEventListener("click", () => adicionarTecnologia(input.value));

           

            CaixaDeInput.appendChild(input);
            CaixaDeInput.appendChild(CaixaDosBotões)
            CaixaDosBotões.appendChild(botaoAdd);
            

            CaixaDeRespostas.appendChild(CaixaDeInput)
            }


            
        }


        const Questionario = document.createElement("section")
        Questionario.classList.add("questionario")
        Questionario.style.width = "80%"
        Questionario.style.height = "80%"
        const Titulo = document.createElement("h2")
        Titulo.innerHTML = "Quais são as tecnologias nas quais gostaria de se especializar?"
        const CaixaDeRespostas = document.createElement("section")
        CaixaDeRespostas.classList.add("caixaDeResposta")
        CriarInput(1)
        Questionario.appendChild(Titulo)
        Questionario.appendChild(CaixaDeRespostas)
        main.appendChild(Questionario)

    } else {

        const Questionario = document.createElement("section")
        Questionario.classList.add("questionario")
        const Pergunta = document.createElement("h2")
        Pergunta.innerHTML = pergunta
        const Respostas = document.createElement("div")
        respostas.forEach((resposta) => {
            const Resposta = document.createElement("p")
            Resposta.innerHTML = resposta
            Resposta.addEventListener("click", () => responder(resposta))
            Respostas.appendChild(Resposta)
        });
        Questionario.appendChild(Pergunta)
        Questionario.appendChild(Respostas)
        main.appendChild(Questionario)
    }

}

function responder(resposta) {
    if (resposta == "Front-End") {
        criarPergunta("Qual linguagem quer aprender?", ["React", "Vue"])

        perguntasRespondidas = true
    } else if (resposta == "Back-End") {
        criarPergunta("Qual linguagem quer aprender?", ["C#", "Java"])

        perguntasRespondidas = true
    } else if (perguntasRespondidas && inserirPerguntas == false) {
        tecnologias.push(resposta)
        inserirPerguntas = true
        criarPergunta("Em que vai se especializar?", [resposta, "FullStack"])
    } else if (inserirPerguntas) {
        criarPergunta("", "", true)
        console.log(tecnologias)
    }

}

// function FluxoDePerguntas(){


// }


criarPergunta("Qual área deseja seguir?", ["Front-End", "Back-End"])

