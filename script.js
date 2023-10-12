const nav = document.querySelector("nav"),
    close = document.getElementById("close"),
    menu = document.getElementById("menu"),
    body = document.querySelector("body");

    menu.addEventListener("click", () => {
        nav.classList.toggle(`active`);
        close.style.display="block"
        menu.style.display="none"
        bodyy5
    })

    close.addEventListener("click", () => {
        nav.classList.toggle(`active`);
        close.style.display="none"
        menu.style.display="block"
    })


    window.addEventListener("resize", () => {
        const larguraTela = document.innerWidth
        if (larguraTela >= 900) {
            menu.style.display="none"
            imgDesktop.style.display="block"
            imgMobile.style.display="none"
        } else if (larguraTela < 900) {
            menu.style.display="block"
            imgDesktop.style.display="none"
            imgMobile.style.display="block"
        }
    })

    