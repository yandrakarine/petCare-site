
let imgLogo = document.getElementById('logo')

function whenScroll() {
    if (scrollY) {
        navigation.classList.add('scroll')
        imgLogo.setAttribute('src', './assets/images/PetCare-logo-branco.png')

    } else {
        navigation.classList.remove('scroll')
        imgLogo.setAttribute('src', './assets/images/PetCare-logo.png')

    }

}

function openMenu() {
    document.body.classList.add('menu-expanded')
    imgLogo.setAttribute('src', './assets/images/PetCare-logo-branco.png')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
    scrollY ? imgLogo.setAttribute('src', './assets/images/PetCare-logo-branco.png') : imgLogo.setAttribute('src', './assets/images/PetCare-logo.png')

}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home,
 #home,
 img,
 #home .stats,
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content`)