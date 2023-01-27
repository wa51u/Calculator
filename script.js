const numContainer = document.querySelector("#numContainer")
//screenSecondLine
let screenFirstValue = "one"
let screenSecondValue = "two"

for (i=9; i>= 0; i-- ) {
    const button = document.createElement("button")
    button.innerText = i
    button.className = ("nums")
    button.id = i 
    numContainer.appendChild(button);
}

function add(...arg){
    const calculation = arg.reduce((total, sign) =>{ 
    return total += sign;
    },0);
    return calculation;
}
function subtract(...arg){
    const calculation = arg.reduce((total, sign, index) =>{
        if (index == 0 ){
            return total += sign;
        } else {
            return total -= sign;
        }
    },0);
    return calculation
}

function multiply(...arg){
    const calculation = arg.reduce((total, sign, index) =>{
        if (index == 0 ){
            return total += sign;
        } else {
            return total *= sign;
        }
    },0);
    return calculation
}

function divide(...arg){
    const calculation = arg.reduce((total, sign, index) =>{
        if (index == 0 ){
            return total += sign;
        } else {
            return total /= sign;
        }
    },0);
    return calculation
}

function operate(sign,...arg){
    switch (sign) {
        case "add":
            return add(...arg);
            break;
        case "subtract":
            return subtract(...arg);
            break;
        case "multiply":
            return multiply(...arg);
            break;
        case "divide":
            return divide(...arg);
            break;
    }
}

//console.log(operate("divide",10,2))

for ( let i = 0; i <= 9;i++ ){
let tempName = (`numNr${i}`)
tempName = document.getElementById(i)
tempName.addEventListener("click", () => {
    console.log(i)
    displayValue += i;
});
}

let allSigns = document.getElementsByClassName("sign")

for (let sign of allSigns){
   // console.log(sign.id)
    sign.addEventListener("click", () => {
        console.log(sign.id)
        displayValue += sign.id;
        console.log(displayValue);
    });
}

//screenFirstLine 
let screenFirstLine = document.getElementById("screenFirstLine")
screenFirstLine.innerText = "test"
console.log(screenFirstLine.innerText)

//screenSecondLine
let screenSecondLine = document.getElementById("screenSecondLine")
screenSecondLine.innerText = "test2"
console.log(screenSecondLine.innerText)



