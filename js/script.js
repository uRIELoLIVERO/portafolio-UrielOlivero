//scroll bar menu

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// change display navbar mobile

const iconHeader = document.querySelector('.header__icon');
const containerNav = document.querySelector('.nav__container__buttons');

iconHeader.addEventListener('click', toggleNavbar)

function toggleNavbar() {
    containerNav.classList.toggle('active')
}

// get height svg
const pantallaDispositivo = window.screen.height

const alturaVentanaNavegador = window.innerHeight;

const alturaBarraNavegacion = pantallaDispositivo - alturaVentanaNavegador;

document.documentElement.style.setProperty('--altura-nav-navegador', navAltura + 'px')
