const container_slides = document.querySelector(".slide_container");
const slide = document.querySelector(".slide");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

next.addEventListener("click", () => {
    const slide_width = slide.clientWidth; // ширина слайда в пикчелях слайда
    container_slides.scrollLeft += slide_width; // scrol на ширину экрана
})

prev.addEventListener("click", () => {
    const slide_width = slide.clientWidth; // ширина слайда в пикчелях слайда
    container_slides.scrollLeft -= slide_width; // scrol на ширину экрана
})
