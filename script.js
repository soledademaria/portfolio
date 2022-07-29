const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6
function scrollToSection(evt){
    evt.preventDefault();
    const href = evt.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

function animaScroll(){
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible){
            section.classList.add('active')
        }
    })
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
})

window.addEventListener('scroll', animaScroll)