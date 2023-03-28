let schetchik = 0;
let random = Math.trunc(Math.random() * 100) + 1;
let mas = [];
let mas2 = [];
let rekord = 0;


function vvod() {
    let vvod = document.querySelector(".vvod").value;
    if (mas2[mas2.length-1] == vvod) {
        alert("вы уже вводили это число");
        schetchik += 0;
    }

    

    if (vvod.length <= 3) {
        mas2.push(vvod);
        if (vvod == random) {
            let rekord = schetchik;
            document.querySelector(".schet_chisla2").innerHTML = rekord; 
            let shet1 = document.querySelector(".schet_chisla1").innerHTML = "0";  
    
        } else {
            if (vvod > random) {
                mas.push(vvod)
                console.log(mas);
                console.log();
                if (vvod > random) {
                        let text = document.querySelector(".h1-words").innerHTML = `загаданное число меньше`;
                    }
                 
                
            } else {
                // if (vvod < random) {
                //     min = mas[i];
                //     text = document.querySelector(".h1-words").innerHTML = `число меньше ${max} - ${vvod}`;
                // }
                text = document.querySelector(".h1-words").innerHTML = `загаданное число больше`;
            }
            schetchik += 1;
            let shet2 = document.querySelector(".schet_chisla1").innerHTML = schetchik;
            console.log(schetchik);
        }
    } else {
        alert("введи правильное число число")
    }
    
 
}




// отлавить ввод числа Number() tru:  and  cath:
// вызывать другую функцию при каком-нибудь событите