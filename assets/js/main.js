/* Change Background Header*/
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)

/* Mixitup filter portfolio */

let mixerPortfolio = mixitup('.work__container',{
    selectors:{
        target: '.work__card'
    },
    animation:{
        duration: 300,
    }
});

/*link Active Work*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(L=>L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=>L.addEventListener('click',activeWork))
/*Scroll selectors active link*/

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY =window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)


/*Change Ligth dark theme*/
const themeButton = document.getElementById('theme-button')
const ligthTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
console.log(selectedTheme)
const selectedIcon = localStorage.getItem('selected-icon')
console.log(selectedIcon)

const getCurrentTheme = () => document.body.classList.contains(ligthTheme) ? 'dark' : 'light'

const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
	document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](ligthTheme)
	themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
	document.body.classList.toggle(ligthTheme)
	themeButton.classList.toggle(iconTheme)
	localStorage.setItem('selected-theme',getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon)
})

/*Scroll Reveal*/

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    //reset: true, 
})

sr.reveal('.home__data')
sr.reveal('.home__handle',{delay: 700})
sr.reveal('.home__social, .home__scroll',{delay: 900, origin:'bottom'})

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 500);
      return false;
    });
  });