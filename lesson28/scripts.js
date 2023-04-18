allSlides = document.querySelectorAll(".gallery_slide");

allSlides.forEach((slide) => {
    slide.addEventListener("click", () => {
        clearAll()
        slide.classList.add("active")
    })
    

})

function clearAll(){
    allSlides.forEach((slide) => {
        slide.classList.remove("active")
    })
}



apple = 1.15
oranges = 4.56

console.log(apple + oranges)
console.log((apple + oranges).toFixed(2))