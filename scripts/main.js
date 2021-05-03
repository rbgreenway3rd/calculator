import { addNumbers } from "./add.js"
import { subtractNumbers } from "./subtract.js"
import { multiplyNumbers } from "./multiply.js"
import { divideNumbers } from "./divide.js"

const buttonContainer = document.querySelector("#buttons")
const answerContainer = document.querySelector("#answer")

buttonContainer.innerHTML = `
<button id="add">Add</button>
<button id="subtract">Subtract</button>
<button id="multiply">Multiply</button>
<button id="divide">Divide</button>
`

const addButton = document.querySelector("#add")
const subtractButton = document.querySelector("#subtract")
const multiplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide")

addButton.addEventListener(
    "click", (event) => {
        const sum = addNumbers(1, 2)

        answerContainer.innerHTML = sum
    }
)
subtractButton.addEventListener(
    "click", (event) => {
        const difference = subtractNumbers(1, 2)

        answerContainer.innerHTML = difference
    }
)
multiplyButton.addEventListener(
    "click", (event) => {
        const product = multiplyNumbers(1, 2)

        answerContainer.innerHTML = product
    }
)
divideButton.addEventListener(
    "click", (event) => {
        const quotient = divideNumbers(1, 2)

        answerContainer.innerHTML = quotient
    }
)