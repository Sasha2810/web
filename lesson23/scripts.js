// random

console.log(Math.trunc(5.999)) // отброс дроби
console.log(Math.ceil(5.000001)) // вверх
console.log(Math.floor(5.999)) // вниз
console.log(Math.round(5.999)) // матемаьическое
console.log(5.3434.toFixed(2)); // округление до опр чисел после точки

console.log(1.35.toFixed(20));
console.log(6.35.toFixed(20)); // не точные значения!!!!!!

let random = Math.trunc(Math.random() * 6) + 1; // рандом 6 чисел
console.log(random);

let red = document.querySelector(".red").innerHTML = "привет"; // меняем текст элемента
let blue = document.querySelector("#blue");


// let int = document.querySelector(".input").value = "adasd";

function myFunction() {
    document.querySelector(".input").value = "YJGGJG";
}