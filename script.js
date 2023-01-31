const numContainer = document.querySelector("#numContainer");
let screenFirstValue = "";
let screenSecondValue = "";
let numA = [];
let numB = [];
let signType = 0;
let result = 0;
let screenFirstLine = document.getElementById("screenFirstLine");
let screenSecondLine = document.getElementById("screenSecondLine");
let allSigns = document.getElementsByClassName("sign");

for (i = 9; i >= 0; i--) {
	const button = document.createElement("button");
	button.innerText = i;
	button.className = ("nums");
	button.id = ("num"+i);
	numContainer.appendChild(button);
	button.addEventListener("click", () => {
		numsEventListener(button.textContent);
	});
};

const decButton = document.createElement("button");
decButton.innerText = ".";
decButton.className = ("nums");
decButton.id = "dec";
numContainer.appendChild(decButton);

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
	return a * b;
};

function divide(a, b) {
	if (b == 0) {
		alert("div by 0 error");
		return ("");
	} else {
		return a / b;
	};
};

function operate(sign, ...arg) {
	switch (sign) {
		case "/":
			return divide(...arg);
		case "*":
			return multiply(...arg);
		case "-":
			return subtract(...arg);
		case "+":
			return add(...arg);	
	};
};

decButton.addEventListener("click", () => {
	numsEventListener(".");
});


function numsEventListener(character){
	if (result == numA[0] &&  result != 0 && signType === 0 ){
		clear(1)
	} else if (signType === 0){
        if (character === (".") && numA.indexOf(".") >= 0) {return}
        numA.push(character);
        screenFirstLine.innerText = (numA.join(""));
    } else {
        if (character === (".") && numB.indexOf(".") >= 0) {return}
        numB.push(character);
        screenSignRefresh();
    };
}

for (let sign of allSigns) {
	sign.addEventListener("click", () => {
		if (sign.id === "clear") {
			clear(1);
        } else if (numA[0]== undefined && numB[0]== undefined){
            return;
        } else if (sign.id === "equal" && numB[0] == undefined){
			return;
		} else if (signType === 0) {
			signType = sign.textContent;
			screenFirstLine.innerText = (`${(numA.join(""))} ${sign.textContent}`);
		} else if (sign.id === "equal") {
			equal();
		} else if (numA[0] != undefined && numB[0] != undefined && signType != 0) {
			let tempsign = sign.textContent;
			equal();
			signType = tempsign;
		} else {
			signType = sign.textContent;
			screenSignRefresh();
		};
	});
};

function equal() {
	if (numB[0] == undefined){
		return
	}
	numA = numA.join("");
	numB = numB.join("");
	numA = parseFloat(numA);
	numB = parseFloat(numB);
	result = (operate(signType, numA, numB));
	screenSecondLine.innerText = result;
	clear();
	numA.push(result);
};

function clear(hard) {
	numA = [];
	numB = [];
	signType = 0;
	screenFirstLine.innerText = "";
	if (hard == true) {
		screenSecondLine.innerText = "";
	};
};

document.addEventListener('keydown', (e) => {
	if (e.key === 'Enter' || e.key === '=') {
		// Add your code here
		return equal();
	} else if (e.key === 'Delete'){
		clear(1);
	} else if (e.key === '/'){
		signType = "/";
		screenSignRefresh()
	} else if (e.key === '*'){
		signType = "*";
		screenSignRefresh()
	} else if (e.key === '-'){
		signType = "-";
		screenSignRefresh()
	} else if (e.key === '+'){
		signType = "+";
		screenSignRefresh()
	}
});

document.addEventListener('keydown', (e) => {
	for (let i=0; i <= 10; i++){
		if (e.key == i){
			numsEventListener(i);
		}; 
	};	
});

function screenSignRefresh() {
	screenFirstLine.innerText = (`${(numA.join(""))} ${signType} ${(numB.join(""))}`);
}