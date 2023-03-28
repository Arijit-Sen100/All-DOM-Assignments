// getting html elements
const Decrement = document.getElementById("Decrement");
const number = document.getElementById("number");
const Increment = document.getElementById("Increment");
const reset = document.getElementById("reset");
// getting on decement
Decrement.addEventListener("click", () => {
    const value = Number(number.innerText);
    if (value > 0) {
        number.innerText = value - 1;
    }
    else{
        alert("Negative is not allowed");
    }
});
// getting on increment
Increment.addEventListener("click", () => {
    const value = Number(number.innerText);
    if (value >= 10) {
        alert("10+ values is not allowed");
    }
    else{
        number.innerText = value + 1;
    }
});
// getting on reset
reset.addEventListener("click", () => {
    number.innerText = 0;
});