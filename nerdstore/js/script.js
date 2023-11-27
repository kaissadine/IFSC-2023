const btnMenu = document.getElementById("menu-btn")
const btnFechar = document.getElementById("fechar")
const menuMobile = document.querySelector(".menu__mobile")

btnMenu.addEventListener("click", () => {
    menuMobile.style.display = "block"
})

btnFechar.addEventListener("click", () => {
    menuMobile.style.display = "none"
})