const numContainer = document.querySelector("#numContainer")

for (i=9; i>= 0; i-- ) {
    const button = document.createElement("button")
    button.innerText = i
    button.className = "nums"
    numContainer.appendChild(button)
}
