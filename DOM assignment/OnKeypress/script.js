

let display = document.getElementById("display")
let inputbox = document.getElementById("inputbox")

inputbox.addEventListener("keypress", (e) => {
    display.innerText = "You Have Pressed" + e.key
})