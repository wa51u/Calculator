const numContainer = document.querySelector("#numContainer")
//screenSecondLine
let screenFirstValue = "one"
let screenSecondValue = "two"
let numA = []
let numB = []
let signType = 0



for (i=9; i>= 0; i-- ) {
    const button = document.createElement("button")
    button.innerText = i
    button.className = ("nums")
    button.id = i 
    numContainer.appendChild(button);
}

function add(a,b){
   return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    if (b == 0){
        alert("div by 0 error")
        return("")
    } else {
    return a/b
    }
}

function operate(sign,...arg){
    
    switch (sign) {
        case "+":
            return add(...arg);
            break;
        case "-":
            return subtract(...arg);
            break;
        case "*":
            return multiply(...arg);
            break;
        case "/":
            return divide(...arg);
            break;
        }
}


//console.log(operate("divide",10,2))

for ( let i = 0; i <= 9;i++ ){
let tempName = (`numNr${i}`)
tempName = document.getElementById(i)
tempName.addEventListener("click", () => {
  if (signType === 0){
    numA.push(i)
    console.log(numA.join(""))
    screenFirstLine.innerText = (numA.join(""))
  } else {
    numB.push(i)
    console.log(numB)
    screenFirstLine.innerText = (`${(numA.join(""))} ${signType} ${(numB.join(""))}`)

  }
});
}

let allSigns = document.getElementsByClassName("sign")

for (let sign of allSigns){
 
    sign.addEventListener("click", () => {

        console.log(sign.textContent)
    if (sign.id === "clear"){
            clear(1)
    } else if (sign.id === "equal" && numB[0] == undefined){
        console.log("jest tak")
        return;
        } else{
    if (signType === 0 ){
        console.log(numB[0] == undefined)

        signType = sign.textContent
        screenFirstLine.innerText = (`${(numA.join(""))} ${sign.textContent}`)
        console.log(signType)
        
    }  else {
         if (sign.id === "equal"){
            equal()
        } else if (numA != [] && numB != [], signType != 0 ){
            let tempsign = sign.textContent
            console.log(tempsign)
            equal()
            signType = tempsign
        } else {
            console.log(sign)
            signType = sign.textContent
            screenFirstLine.innerText = (`${(numA.join(""))} ${signType} ${(numB.join(""))}`)

        }
    
    }
    }});
        }

//screenFirstLine 
let screenFirstLine = document.getElementById("screenFirstLine")
//screenFirstLine.innerText = "test"
//console.log(screenFirstLine.innerText)

//screenSecondLine
let screenSecondLine = document.getElementById("screenSecondLine")
//screenSecondLine.innerText = "test2"
//console.log(screenSecondLine.innerText)

function equal(){
    let result = 0 
    numA = numA.join("")
    numB = numB.join("")
    numA = parseInt(numA)
    numB = parseInt(numB)
    result = (operate(signType,numA,numB))
    screenSecondLine.innerText = result
    console.log(`numA0 = ${numA}`)
    clear()
    numA.push(result)
    console.log(`numA0 = ${numA}`)
}

function clear(hard){
    numA = []
    numB = []
    signType = 0
    screenFirstLine.innerText = ""  
    if (hard == true){
    screenSecondLine.innerText = "" 
    }
} 