let incButton = document.querySelector("#inc")
let decButton = document.querySelector("#dec")
let answer = document.querySelector(".result")
let val = document.getElementById("nums")

function increment() {
    let num = parseInt(answer.value)
    let incermentor = parseInt(val.value)
    answer.value = `${num += incermentor}`
}

function decrement() {
    let num = parseInt(answer.value)
    let incermentor = parseInt(val.value)
    answer.value = `${num -= incermentor}`
}


incButton.addEventListener("click", (e) => {
    e.preventDefault()
    increment()
})

decButton.addEventListener("click", (e) => {
    e.preventDefault()
    decrement()
})