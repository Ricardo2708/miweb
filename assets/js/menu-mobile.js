document.addEventListener("DOMContentLoaded", (e) =>{
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show")

        if(show){
            mobile_menu.classList.remove("menu-mobile--show")
        }else{
            mobile_menu.classList.add("menu-mobile--show")
        }
    }

    // Seleccionar elementos
    let mobile_btn = document.querySelector('.navbar__mobile-btn')
    let mobile_menu = document.querySelector('.menu-mobile')
    mobile_btn.addEventListener("click", showHiddenMenu)


    let btn__close = document.querySelector(".menu-mobile__close")
    btn__close.addEventListener("click", showHiddenMenu)



    // Resize Windows
    window.addEventListener("resize", (e) => {
        let window__width = parseInt(document.body.clientWidth)

        if(window__width >= 1000 ){
            mobile_menu.classList.remove("menu-mobile--show")
        }
    })




})