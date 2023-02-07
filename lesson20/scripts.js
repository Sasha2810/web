 "use strict";


// ФУНКЦИИ


// function logger(beton, kamen) {
//     if (kamen === undefined) {
//         kamen = "без использования";
//     }
//     console.log(beton, kamen);
//     const smes=`получим вкусняшку из ${beton} яблок и ${kamen} апельсинов`

//     return smes;
// }

// console.log(logger(3, 2));



// function logger(beton, kamen) {
//     kamen = kamen || "check"   
//     // или то, или то 
//     console.log(beton, kamen);
//     const smes=`получим вкусняшку из ${beton} яблок и ${kamen} апельсинов`

//     return smes;
// }

// console.log(logger(3));


// function fun() {
//     let a  = prompt("svsb");
//     let b = prompt("vsgs");

//     if (a > b) {
//         alert(`число ${a} больше`);
//     }
//     else {
//         alert(`число ${b} больше`);
//     }
// }

// fun();

// // Впеременную можно ставить значения функции

// const age1 = fun();
// console.log(age1);

// const calcAge2 = function() {
//     return 2023 - bd;
// }

// const age2 = calcAge2();
// console.log(age);



// function fun() {
//     spis = [85, 54, 41, 53, 34, 57];
//     let d = 0;
//     let n = 0;
//     d = (spis[0]+spis[1]+spis[2]) / 3;
//     n = (spis[3]+spis[4]+spis[5]) / 3;
    
//     if (d>n) {
//         alert("первая выйграла");
//     } else {
//         alert("вторая выйграла");
//     }
// }

// fun();

// Array
const students = ["Лиза", "Миша", "Ясинбек", "Тимур"];
console.log(students);
console.log(students[0]);
console.log(students[students.length-1]);
// другой способ
console.log(students.at(-1));

students[5]='даша';// добавление элемента в масив

const massive = ["э1"];
massive[5] = "э2";

console.log(massive)

// разные типы в масиве
const name = 'Антон';
const teacher = [name, 24, "учитель", students]
console.log(teacher);

// 44