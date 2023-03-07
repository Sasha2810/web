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



// let x = prompt("Ы: ");
switch(x) {
    case '1':  // или так if (x === '1') получается switch это замена   
    
        console.log(1);
        break;
    case '2': // if (x === 'value2')
        console.log(2);
        break;
    default:
        console.log(3);
        break;
  }
// Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
// Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).



// for( let jump=1; jump<=10; jump++ ) {
//     if (jump == 4) continue;  // пропуск итерации
//     console.log("Прыг " + jump);
// }

// for( let jump=1; jump<=10; jump++ ) {
//     if (jump == 4) break;  // выход из цикла
//     console.log("Прыг " + jump);
// }


// for( let jump=1; jump<=10; jump++ ) {
//     console.log("Прыг", jump);
//     for( let sit=1; sit<=3; sit++ ) {
//         console.log("Присед", sit);
//     }
// }

// for( let jump=1; jump<=10; jump++) {
//     if (jump ==4) continue;
//     console.log("Прыг", jump)
//     for( let sit=1; sit<=3; sit++ ) {
//         console.log("присед", sit);
//     }
// }


// for( let jump=1; jump<=10; jump++) {
//     if (jump == 4) continue;
//     console.log("Прыг", jump)
//     for( let sit=1; sit<=3; sit++ ) {
//         if (jump % 2 == 0) break;
//         console.log("присед", sit);
//     }
// }

// while (true){
//     console.log("Ы")
// }

// x = Math.trunc(Math.random() * 6) + 1;
// console.log(x)
// console.log(Math.trunc(x))  // округление вниз
// console.log(Math.ceil(x))  // округление вверх
// console.log(Math.round(x))  // округление математическое
// console.log(x.toFixed(2))

// console.log(1.35.toFixed(20))
// console.log(6.35.toFixed(20))

document.querySelector(".message").innerText = "Другое сообщение"
// document.querySelector(".message").style.backgroundColor ="blue";


document.querySelector(".in1").value = "Принято!"