const btnMenu = document.getElementById("menu-btn")
const btnFechar = document.getElementById("fechar")
const menuMobile = document.querySelector(".menu__mobile")

btnMenu.addEventListener("click", () => {
    menuMobile.classList.remove("hide")
})

btnFechar.addEventListener("click", () => {
    menuMobile.classList.add("hide")
})