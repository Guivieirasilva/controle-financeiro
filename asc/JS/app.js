const RENDA = document.querySelector("input")

const RESULTADOS =document.querySelector("#resultados")

const NESSECIDADES = document.getElementById("ResultadoNecessidades")

const LAZER = document.getElementById("ResultadoLazer")

const OBJETIVOS = document.getElementById("ResultadoObjetivos")

const INDEPENDENCIA = document.getElementById("resultadoIndependencia")

const CAIXA = document.getElementById("resultadoCaixa")

const CALCULAR = document.getElementById("calcular")

const BOTAO = document.querySelectorAll('.button')

const POPUP = document.querySelectorAll('div.popup-wrapper')

function abrirPopup(){

    BOTAO[0].addEventListener('click', () => {
        POPUP[0].style.display = "block"
    })
    BOTAO[1].addEventListener('click', () => {
        POPUP[1].style.display = "block"
    })
    BOTAO[2].addEventListener('click', () => {
        POPUP[2].style.display = "block"
    })
    BOTAO[3].addEventListener('click', () => {
        POPUP[3].style.display = "block"
    })
    BOTAO[4].addEventListener('click', () => {
        POPUP[4].style.display = "block"
    })
}

function fecharPopup(){
    POPUP.forEach((event) => {
    event.addEventListener('click', (e) => {
        const close = e.target.classList[0]

        if(close === "popup-close" || close === "popup-wrapper"){
            POPUP.forEach( p => {
                p.style.display = "none"
            })
        }
    })
})
}

function display() {
    var resultado = document.getElementsByClassName("resultados")[0]

    if(Number(RENDA.value) > "500"  ){
        resultado.style.display = "block" 
        console.log("foi");
    } else {
        resultado.style.display = "block" 
        resultado.innerHTML = `<span>O valor inserido precisa ser maior que R$500,00</span>`
        setTimeout(
        'location.reload()', 2000
        )
    }
}


function calcular(){
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
}

calcular()
abrirPopup()
fecharPopup()
