const btnMenu = document.getElementById("menu-btn")
const btnFechar = document.getElementById("fechar")
const menuMobile = document.querySelector(".menu__mobile")
const menuDesktop = document.querySelector(".menu__list-desktop")

btnMenu.addEventListener("click", () => {
    menuMobile.classList.remove("hide")
})

btnFechar.addEventListener("click", () => {
    menuMobile.classList.add("hide")
})

window.onload = onLoadPage
window.onresize = onResizePage

function onLoadPage() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        menuDesktop.classList.remove("hide-desktop")
        btnMenu.classList.add("hide-desktop")
    } else {
        menuDesktop.classList.add("hide-desktop")
        btnMenu.classList.remove("hide-desktop")
    } 
}

function onResizePage() {
    onLoadPage()
}