let schetchik = 0;
let random = Math.trunc(Math.random() * 9) + 1;
let mas = [];
let min = 0;

function vvod() {
    let vvod = document.querySelector(".vvod").value;
    

    if (vvod.length < 3) {
        if (vvod == random) {
            let rekord = document.querySelector(".schet_chisla2").innerHTML = schetchik; 
        } else {
            if (vvod > random) {
                mas.push(vvod)
                console.log(mas);
                console.log();
                for (var i = 0; i < mas.length; i++) {
                    if (random > mas[i]) {
                        let text = document.querySelector(".h1-words").innerHTML = `число меньше ${mas[i]} - ${vvod}`;
                    }
                }  
                
            } else {
                // if (vvod < random) {
                //     min = mas[i];
                //     text = document.querySelector(".h1-words").innerHTML = `число меньше ${max} - ${vvod}`;
                // }
                text = document.querySelector(".h1-words").innerHTML = `число больше ${vvod}-100`;
            }
            schetchik += 1;
            let shet = document.querySelector(".schet_chisla1").innerHTML = schetchik;
            console.log(schetchik);
        }
    } else {
        alert("введи число")
    }
}


// отлавить ввод числа Number() tru:  and  cath: