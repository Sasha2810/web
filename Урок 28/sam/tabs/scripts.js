const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

tabs.forEach((btns)=> { // для всех и название (любое )
      btns.addEventListener("click", function() {
        let currentTab = btns;
        let id = currentTab.dataset.id; // сокращаем data-id из html
        // убираем active у всех кнопак
        tabs.forEach((btn) => {
            btn.classList.remove("active");
            })
         currentTab.classList.add("active"); 
            })
})
