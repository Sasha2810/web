const modalBtns = document.querySelectorAll(".main-button");
const modal = document.querySelector(".form");
const close = document.querySelector(".crest");
// Закрытие модального окна
const closeModal = () => {
    modal.classList.add("hidden"); // Добавление класса элементу
}

modalBtns.forEach((btn) => {
    btn.addEventListener("click", function(){
        modal.classList.remove("hidden");
    })
})

close.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("hidden") && e.key == "Escape") {
        closeModal();
    } 
})