const numContainer = document.querySelector("#numContainer");
let screenFirstValue = "one";
let screenSecondValue = "two";
let numA = [];
let numB = [];
let signType = 0;

for (i = 9; i >= 0; i--) {
	const button = document.createElement("button");
	button.innerText = i;
	button.className = ("nums");
	button.id = i;
	numContainer.appendChild(button);
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b == 0) {
		alert("div by 0 error")
		return ("");
	} else {
		return a / b;
	}
}

function operate(sign, ...arg) {
	switch (sign) {
		case "+":
			return add(...arg);
		case "-":
			return subtract(...arg);
		case "*":
			return multiply(...arg);
		case "/":
			return divide(...arg);
	}
}

for (let i = 0; i <= 9; i++) {
	let tempName = (`numNr${i}`);
	tempName = document.getElementById(i);
	tempName.addEventListener("click", () => {
		if (signType === 0){
			numA.push(i);
			screenFirstLine.innerText = (numA.join(""));
		} else {
			numB.push(i);
			screenFirstLine.innerText = (`${(numA.join(""))} ${signType} ${(numB.join(""))}`);
		};
	});
};

let allSigns = document.getElementsByClassName("sign");

for (let sign of allSigns) {
	sign.addEventListener("click", () => {
        console.log(sign);
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
			screenFirstLine.innerText = (`${(numA.join(""))} ${signType} ${(numB.join(""))}`);
		};
	});
};

let screenFirstLine = document.getElementById("screenFirstLine")
let screenSecondLine = document.getElementById("screenSecondLine")

function equal() {
	let result = 0;
	numA = numA.join("");
	numB = numB.join("");
	numA = parseInt(numA);
	numB = parseInt(numB);
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