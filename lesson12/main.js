let sales_div = document.getElementById("sales");

function buy() {

    sales.innerHTML = '<input type="button" class="button" value="Отменить заявку" onclick="cancel()" /> <p class="onclick-p p1">Заявка подана, ожидайте звонка оператора</p>';

}

function cancel() {

    sales.innerHTML = '<input type="button" class="button" value="Оставить заявку" onclick="buy()" /> <p class="onclick-p p2">Заявка отменена 😥</p>';

}


function first() {

    document.getElementById("text1").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

    document.getElementById("first").setAttribute("style", "display: none");

    document.getElementById("close1").setAttribute("style", "display: block");

}

function first_yelloy() {

    document.getElementById("text1").setAttribute("style", "display: none");

    document.getElementById("close1").setAttribute("style", "display: none");

    document.getElementById("first").setAttribute("style", "display: block");

}

function second() {

    document.getElementById("text2").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

    document.getElementById("second").setAttribute("style", "display: none");

    document.getElementById("close1").setAttribute("style", "display: block");

}

function second_yelloy() {

    document.getElementById("text2").setAttribute("style", "display: none");

    document.getElementById("close1").setAttribute("style", "display: none");

    document.getElementById("second").setAttribute("style", "display: block");

}


function third() {

    document.getElementById("text3").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

    document.getElementById("third").setAttribute("style", "display: none");

    document.getElementById("close1").setAttribute("style", "display: block");

}

function third_yelloy() {

    document.getElementById("text3").setAttribute("style", "display: none");

    document.getElementById("close1").setAttribute("style", "display: none");

    document.getElementById("third").setAttribute("style", "display: block");

}

function thourd() {

    document.getElementById("text4").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

    document.getElementById("thourd").setAttribute("style", "display: none");

    document.getElementById("close1").setAttribute("style", "display: block");

}

function thourd_yelloy() {

    document.getElementById("text4").setAttribute("style", "display: none");

    document.getElementById("close1").setAttribute("style", "display: none");

    document.getElementById("thourd").setAttribute("style", "display: block");

}