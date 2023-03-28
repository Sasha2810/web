const btnes = document.querySelectorAll(".letter"); // сохранение кнопок по ощему классу
const number = btnes.length;

for(let i=0; i < number; i++) {
    btnes[i].addEventListener("click", function(event) {
        const btn_html = btnes[i].innerHTML; // получаем нажатую кнопку
        sound(btn_html); // передаём переменную в функцию
    });
}

document.addEventListener("keydown", function(event) {
    sound(event.key); // событие нажатия кнопки через событие event
});

const sound = (key) => {
    switch (key) {
        case "First": 
            const let1 = new Audio("sounds/sound1.mp3");
            let1.play();
            break;
        case "Second": 
            const let2 = new Audio("sounds/sound2.mp3");
            let2.play();
            break;
        case "Third": 
            const let3 = new Audio("sounds/sound3.mp3");
            let3.play();
            break;
        }
} 


// стрелочная функция   () передаёт элементы