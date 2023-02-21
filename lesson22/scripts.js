
// const commonPart1 ="Name";
// const  teacher1 = {
//     User: "sasha",
//     birthYear: 1999,
//     calcAge: function(){
//          //   this.age = 2023 - this.birthYear; можно создать элемент и написать в него значение
//            // return this.age
//             return 2023 - this.birthYear; // this берёт из обьекта его функцию/переменную (её не надо передовать) 
//         },

// };

// console.log(teacher1.calcAge()); // и не надо передовать значение 
// delete teacher1.User; // удаление обьекта
// console.log(teacher1);



// if ("birthYear" in teacher1) { // проверка наличия ключа в обькте
//     console.log("есть");
// }


// const Object1 = {
//     name: "Sasha",
//     rost: 1.68,
//     weight: "53",
//     imt:  function(){
//         this.shet = this.weight / this.rost**2;
//         return this.shet
//     }
// }


// const Object2 = {
//     name: "Dima",
//     rost: 1.78,
//     weight: "63",
//     imt:  function(){
//         this.shet = this.weight / this.rost**2;
//         return this.shet
//     }
// }

// console.log(Object2.imt().toFixed(2));
// console.log(Object1.imt().toFixed(2));

// const min = Object2.imt();
// const min1 = Object1.imt();

// if (min > min1) {
//     console.log("У первого больше");
// }

// else {
//     console.log("у второго больше");
// }

// sr = (min + min1) / 2;
// console.log(sr);




// ab = ["asdsad", 12, ed = [12, 20, 10], id = { name: "Sasha"}]

// for(let j=0; j<=ab.length-1; j++) {
//     console.log(ab[j]); // выводим все элементы по индексу из масива 
// }

years = [1920, 2013, 2020, 1996, 1630];
const mas = []
for(let step=0; step<=years.length-1; step++) {
    sad = 2023 - years[step];
    mas.push(sad);
}

console.log(mas);

const mas1 = []
for(let step=years.length-1; step>=0; step--) {
    sad = 2023 - years[step];
    mas1.push(sad);
}

console.log(mas1);


// 92                                                                                                                                      
