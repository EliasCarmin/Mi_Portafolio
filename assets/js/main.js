/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

// Inicializar EmailJS
emailjs.init("GndKCsa6Vs7yR64cf")

const sendEmail = (e) => {
    e.preventDefault()
    
    // Mostrar mensaje de carga
    contactMessage.textContent = "Enviando mensaje..."
    contactMessage.style.color = "#2196F3"
    
    emailjs.sendForm('service_n91jr8e', 'template_11rc1ui', contactForm)
    .then(() => {
        // Mostrar mensaje de éxito
        contactMessage.textContent = "Mensaje enviado correctamente ✅"
        contactMessage.style.color = "#4CAF50"

        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            contactMessage.textContent = ""
        }, 5000)

        // Limpiar campos del formulario
        contactForm.reset()
    })
    .catch((error) => {
        console.error('Error:', error)
        // Mostrar mensaje de error
        contactMessage.textContent = "Error al enviar el mensaje ❌"
        contactMessage.style.color = "#f44336"
    })
}

if (contactForm) {
    contactForm.addEventListener('submit', sendEmail)
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    window.scrollY >= 350 
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data, .experience, .skills, .contact__container')
sr.reveal('.home__img', {delay: 600})
sr.reveal('.home__scroll', {delay: 800})
sr.reveal('.work__card, .services__card', {interval: 100})
sr.reveal('.about__content', {interval: 100})
sr.reveal('.about__img', {interval: 100})