/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >=50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    sldiePreview: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 

/*=============== VALUE ACCORDION ===============*/

const accordionItems = document.querySelectorAll('.value__accordion__item');
accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('.value__accordion-header');
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open');
         toggleItem(item);
         if(openItem && openItem!==item) {
            toggleItem(openItem);
         }
    })
});
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content');
    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open');
    }
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
     sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id');
              if (scrollY > sectionTop && scrollY <= sectionHeight + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link');
              } else {
                document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link');
         }
     })
}
window.addEventListener('scroll', scrollActive);
/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp () {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 

const themeButtom = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//Previous selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current them that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButtom.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    document.body.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}
themeButtom.addEventListener('clik', ()=>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButtom.classList.toggle.toggle(iconTheme)
   // We save the theme and the currnt icon that the user chose 
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
