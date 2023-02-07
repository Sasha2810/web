
// let age = prompt();
// if (age > 18) {
//     alert("доступ разрешен");
// }
// else {
//     age = Number(age);
//     alert(`вам осталось ${18-age} лет`);
//     alert("запрещён");
// }

// let age1 = Number(prompt());
// console.log(age1);
// console.log(typeof age1);
// switch(age1) {
//     case age1 < 12:
//         alert("пора спать");
//         break;

//     case age1 < 16:
//         alert("не много посиди");
//         break;
    
//     default:
//         alert("сиди");
//         break;
         
// }

let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  let d = new Date();
  let n = d.getDay();
  console.log(days[n]);

  
"use strict";
                  
let hasFinishedEducation = false; 
const passFinalTest = true; 
 //Если условие верно то изменить переменную hasFinishedEducation на true
if(passFinalTest) hasFinishEducation=true; //ошибка в переменной hasFinishedEducation
 
//Если условие верно то вывести текст
if(hasFinishedEducation) console.log("Поздравляем! Ты закончил обучение!");