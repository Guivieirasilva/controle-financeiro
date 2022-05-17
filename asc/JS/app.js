const RENDA = document.querySelector("input")

const RESULTADOS =document.querySelector("#resultados")

const NESSECIDADES = document.getElementById("ResultadoNecessidades")

const LAZER = document.getElementById("ResultadoLazer")

const OBJETIVOS = document.getElementById("ResultadoObjetivos")

const INDEPENDENCIA = document.getElementById("resultadoIndependencia")

const CAIXA = document.getElementById("resultadoCaixa")

const CALCULAR = document.getElementById("calcular")



CALCULAR.addEventListener("click",() => {
    var calculoN = 60 * Number(RENDA.value) / 100
    var calculoL = 15 * Number(RENDA.value) / 100
    var calculoO = 10 * Number(RENDA.value) / 100
    var calculoI = 10 * Number(RENDA.value) / 100
    var calculoC = 5 * Number(RENDA.value) / 100

    NESSECIDADES.innerHTML = `R$${calculoN}`
    LAZER.innerHTML = `R$${calculoL}`
    OBJETIVOS.innerHTML = `R$${calculoO}`
    INDEPENDENCIA.innerHTML = `R$${calculoI}`
    CAIXA.innerHTML = `R$${calculoC}`
})

function displayOn() {

    document.getElementsByClassName("resultados")[0].style.display = "block"

}

