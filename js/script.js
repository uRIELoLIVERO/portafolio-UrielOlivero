<<<<<<< HEAD
//scroll bar 
=======
//scroll bar menu
>>>>>>> 539173557ad9d222da8cf750a0fb004fb515e52f

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// change display navbar mobile

let iconHeader = document.querySelector('.header__icon');
let containerNav = document.querySelector('.nav__container__buttons');

iconHeader.addEventListener('click', toggleNavbar)

function toggleNavbar() {
    containerNav.classList.toggle('active')
<<<<<<< HEAD
}
=======
}

// get height svg
let heroWave = document.querySelector('.portfolio__wave--top');

let heroWaveWidth = heroWave.getBoundingClientRect().width;

let aspectRatio = 1440/200

var heroWaveHeight = heroWaveWidth / aspectRatio

document.documentElement.style.setProperty('--altura-svg', svgAltura + 'px')
>>>>>>> 539173557ad9d222da8cf750a0fb004fb515e52f
