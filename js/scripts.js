const lolBt = document.getElementById("lol");
const aramBt = document.getElementById("aram");
const csBt = document.getElementById("cs");
const inputNomes = document.getElementById("nomes");
const botaoSortear = document.getElementById("sortear");

lolBt.addEventListener ('click', () => {
    document.body.style.backgroundImage = "url('/imagens/sorakas_background.jpg')"
})

aramBt.addEventListener ('click', () => {
    document.body.style.backgroundImage = "url('/imagens/img_lol.png')"
})

csBt.addEventListener ("click", () => {
    document.body.style.backgroundImage = "url('/imagens/img_cs.jpeg')"
})

botaoSortear.addEventListener("click", ()=> {
    const nomesDigitados = inputNomes.value.split(",").map(nome => nome.trim());

    if (nomesDigitados.length != 10) {
        alert("Por favor, insira os dez nomes usando vírgula")
        return;
    }

    const nomesEmbaralhados = embaralharNomes([...nomesDigitados]);

    const metade = Math.ceil(nomesEmbaralhados.length / 2);
    const time1 = nomesEmbaralhados.slice(0, metade);
    const time2 = nomesEmbaralhados.slice(metade);

    preencherColuna("timeANomesSorteados", time1);
    preencherColuna("timeBNomesSorteados", time2);
})

function embaralharNomes(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function preencherColuna(colunaId, nomes) {
    const coluna = document.getElementById(colunaId);
    coluna.innerHTML = "";

    nomes.forEach(nome => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = nome;
        input.classList.add("nomesSorteados");
        coluna.appendChild(input);
        input.style.filter = "none"
    });
    }