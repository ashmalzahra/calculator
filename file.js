const displayValues = document.querySelector('.display-values');
const allButtons = document.querySelectorAll('.button');

allButtons.forEach(button => {
    button.addEventListener('click', (e) =>{
        const value = e.target.dataset.value

        if (value === '='){
            if (displayValues.innerText.includes('+')){
                const splitStuff = displayValues.innerText.split('+')
                operate('+', splitStuff[0], splitStuff[1])
            }

            if (displayValues.innerText.includes('-')){
                const splitStuff = displayValues.innerText.split('-')
                operate('-', splitStuff[0], splitStuff[1])
            }

            if (displayValues.innerText.includes('x')){
                const splitStuff = displayValues.innerText.split('x')
                operate('x', splitStuff[0], splitStuff[1])
            }

            if (displayValues.innerText.includes('÷')){
                const splitStuff = displayValues.innerText.split('÷')
                operate('÷', splitStuff[0], splitStuff[1])
            }
        }
        displayValues.innerText += value
        if(value === "Clear")
        displayValues.innerText= ''
    })
})




const add = function(a,b){
const num1 = Number(a);
const num2 = Number(b);
return num1 + num2;
};

const subtract = function(a,b){
    return a - b;
};

const multiply = function(a,b){
    return a*b;
};

const divide = function(a,b){
    return a/b;
};

const operate = function( operator, a , b){
    if (operator === '+'){
        displayValues.innerText = add(a,b);
    }
    if(operator === '-'){
        displayValues.innerText = subtract(a,b);
    }
    if(operator === 'x'){
        displayValues.innerText = multiply(a,b);
    }
    if(operator === '÷'){
        displayValues.innerText = divide(a,b);
    }
}