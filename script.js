const numContainer = document.querySelector("#numContainer")

for (i=9; i>= 0; i-- ) {
    const button = document.createElement("button")
    button.innerText = i
    button.className = "nums"
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

f//unction operate(sign,...arg){
    
//}



//console.log(operate("add",1,2,3)) 