

const display = document.querySelector('#answer')
//this is the parent element, and we want text to display by classifying it as a child element

let buttons = document.querySelectorAll('.button')
//you are establishing the (.variable) by using the let buttons = 
for (let button of buttons)
//so the text (let button of buttons) -- the first button is a placeholder. The second buttons is a established due to the let buttons function in line 22 
    button.addEventListener("click", (event) => {
        console.log(event.target.innerText)

        let newElement = document.createElement('div')
        let text = document.createTextNode(event.target.innerText)
        newElement.appendChild(text)
        display.appendChild(newElement)

    }) 

const operator = ('Enter operator to perform the calculation (either +, -, * or /):'); 
const number1=parseFloat('Enter the first number: ');
const number2=parseFloat('Enter the second number: '); 

if(buttons === "="){
    this.calculate()
}
else if(buttons === 'C'){
    this.reset()
}
else if(buttons === operator) {
    result = number1 + number2
}


//console.log(Math.imul(number1, number2))
/*
   if (operator === '+') {
    answer = number1 + number2; 
   } else if (operator === '*') {
    answer = number1 * number2; 
   } else if (operator === '/') {
    answer = number1 / number2; 
   } else if (operator === '-') {
    answer = number1 - number2; 
   }
console.log(answer)

//window.alert(`Answer: ${result}`) 

// event = what we click -- target = what was clicked 
// after addEventListener: waiting for a string that represents some sort of event that can happen in a browser -- can't be just anything. 






/* 
    if(button === "="){
        this.calculate()
    }
    else if(button === 'C'){
        this.reset()
    }
    else if(button === operator) {
        result = number1 + number2
    }
}; 



/* work for me 
let button = document.querySelectorAll(".button");
let frame = document.querySelector("#calculation-frame"); */

/* 
for (let button of button) {
    button.addEventListening("click", (event) => {

    button.classList.add(click-color) 
    work for me */ 