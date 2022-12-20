var btns = {
    small: document.getElementById("small-button"),
    normal: document.getElementById("normal-button"),
    big: document.getElementById("big-button")
};
var link = document.getElementById("scale-link");

btns.small.addEventListener("click", function() { ChangeScale("small"); });
btns.normal.addEventListener("click", function() { ChangeScale("normal"); });
btns.big.addEventListener("click", function() { ChangeScale("big"); });

window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale() {
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if (width > 1980) {
        ChangeScale("big");
    } else if (width <= 1980 && width > 720) {
        ChangeScale("normal");
    } else if (width < 720) {
        ChangeScale("small");
    }
}