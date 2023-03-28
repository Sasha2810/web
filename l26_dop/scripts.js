let modalbtns = document.querySelector(".btn");
let window = document.querySelector(".modal");
let close = document.querySelector(".close");


function windowes() {
    window.addEventListener("click", function(event) {
        if (window.classList.contains("hidden"))  {
            window.style.display = "none";
        }// получаем нажатую кнопку
    });
}