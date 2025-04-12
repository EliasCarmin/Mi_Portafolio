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

const linkAction = () =>{
    const navMenu = Document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventtDefault()
    emailjs.sendForm('service_n91jr8e','template_11rc1ui','#contact-form','GndKCsa6Vs7yR64cf')
    .then(() =>{
        //showmeesage
        contactMessage.textContent = "Mensaje enviado correctamente ✅"

        //remove message
        setTimeout(() => {
            contactMessage.textContent = ""
        }, 5000);

        //clear input fields
        contactForm.reset()
    }, () =>{
        contactMessage.textContent = 'Mensaje de Error'
    })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Add / remove the dark / icon theme
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home__profession, .section__title`)
sr.reveal(`.home__img`, { delay: 500 })
sr.reveal(`.home__social-icon`, { interval: 200 })
sr.reveal(`.skills__content, .work__card, .contact__form`, { interval: 200 })

/*=============== WORK FILTER ===============*/
const workFilters = document.querySelectorAll('.work__item')
const workItems = document.querySelectorAll('.work__card')

workFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remove active class from all filters
        workFilters.forEach(f => f.classList.remove('active'))
        // Add active class to clicked filter
        filter.classList.add('active')

        const filterValue = filter.getAttribute('data-filter')

        workItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue.replace('.', ''))) {
                item.style.display = 'block'
                setTimeout(() => {
                    item.style.opacity = '1'
                    item.style.transform = 'translateY(0)'
                }, 100)
            } else {
                item.style.opacity = '0'
                item.style.transform = 'translateY(20px)'
                setTimeout(() => {
                    item.style.display = 'none'
                }, 300)
            }
        })
    })
})

/*=============== SKILLS ANIMATION ===============*/
const skillsContent = document.querySelectorAll('.skills__content')

const animateSkills = () => {
    skillsContent.forEach(content => {
        const skills = content.querySelectorAll('.skills__percentage')
        skills.forEach(skill => {
            const percentage = skill.style.width
            skill.style.width = '0'
            setTimeout(() => {
                skill.style.width = percentage
            }, 100)
        })
    })
}

// Animate skills when they come into view
const skillsSection = document.querySelector('.skills')
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills()
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.5 })

observer.observe(skillsSection)

/*=============== HEADER SCROLL ===============*/
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
})