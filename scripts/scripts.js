const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

const menuSlider = document.getElementById('menu-slider');
const arrayItemsSlider = Array.from(document.querySelectorAll('.slider__li'));
const arrayButtonsSliderMenu = Array.from(document.querySelectorAll('.menu-slider__div'));











menuSlider.addEventListener('click', (e) => {
    
    arrayButtonsSliderMenu.forEach(button => {
        if(button.id == e.target.id) {
            arrayItemsSlider.forEach(itemSlider => {
                if(button.id.slice(-1) == itemSlider.classList[1].slice(-1)) {
                    arrayItemsSlider.forEach(el => {
                        el.classList.remove('mostrar-banner-slider');
                    })
                    arrayButtonsSliderMenu.forEach(el => {
                        el.classList.remove('menu-slider__div--modified-1', 'color-button-slider');
                    })
                    itemSlider.classList.add('mostrar-banner-slider');
                    button.classList.add('color-button-slider');
                }
            })
        }
    })
})




























const itemSlider1 = document.querySelector('.slider__li--1')
const itemSlider2 = document.querySelector('.slider__li--2')
const itemSlider3 = document.querySelector('.slider__li--3')
const buttonSlider1 = document.getElementById('btn-menu-slider1')
const buttonSlider2 = document.getElementById('btn-menu-slider2')
const buttonSlider3 = document.getElementById('btn-menu-slider3')

const testimony1 = document.getElementById('testimony-1');
const testimony2 = document.getElementById('testimony-2');
const testimony3 = document.getElementById('testimony-3');
const testimony4 = document.getElementById('testimony-4');
const testimonialsMenuSlider = document.getElementById('testimonials-menu-slider');
const testimonialsButtonSlider1 = document.getElementById('testimonials-slider-button1');
const testimonialsButtonSlider2 = document.getElementById('testimonials-slider-button2');
const testimonialsButtonSlider3 = document.getElementById('testimonials-slider-button3');
const testimonialsButtonSlider4 = document.getElementById('testimonials-slider-button4');



testimonialsMenuSlider.addEventListener('click', (e) => {
    if(e.target.id == 'testimonials-slider-button1') {
        testimony1.classList.add('order');
        testimony2.classList.remove('order');
        testimony3.classList.remove('order');
        testimony4.classList.remove('order');

        testimonialsButtonSlider1.classList.add('background-color-slider-testimonials')
        testimonialsButtonSlider2.classList.remove('background-color-slider-testimonials')
        testimonialsButtonSlider3.classList.remove('background-color-slider-testimonials')
        testimonialsButtonSlider4.classList.remove('background-color-slider-testimonials')
    }
    else if(e.target.id == 'testimonials-slider-button2') {
        testimony1.classList.remove('order');
        testimony2.classList.add('order');
        testimony3.classList.remove('order');
        testimony4.classList.remove('order');

        testimonialsButtonSlider1.classList.remove('background-color-slider-testimonials', 'testimonials-menu-slider__button--modified')
        testimonialsButtonSlider2.classList.add('background-color-slider-testimonials')
        testimonialsButtonSlider3.classList.remove('background-color-slider-testimonials')
        testimonialsButtonSlider4.classList.remove('background-color-slider-testimonials')
    }
    else if(e.target.id == 'testimonials-slider-button3') {
        testimony1.classList.remove('order');
        testimony2.classList.remove('order');
        testimony3.classList.add('order');
        testimony4.classList.remove('order');

        testimonialsButtonSlider1.classList.remove('background-color-slider-testimonials', 'testimonials-menu-slider__button--modified')
        testimonialsButtonSlider2.classList.remove('background-color-slider-testimonials')
        testimonialsButtonSlider3.classList.add('background-color-slider-testimonials')
        testimonialsButtonSlider4.classList.remove('background-color-slider-testimonials')
    }
    else if(e.target.id == 'testimonials-slider-button4') {
        testimony1.classList.remove('order');
        testimony2.classList.remove('order');
        testimony3.classList.remove('order');
        testimony4.classList.add('order');

        testimonialsButtonSlider1.classList.remove('background-color-slider-testimonials', 'testimonials-menu-slider__button--modified')
        testimonialsButtonSlider2.classList.remove('background-color-slider-testimonials')
        testimonialsButtonSlider3.classList.remove('background-color-slider-testimonials')
        testimonialsButtonSlider4.classList.add('background-color-slider-testimonials')
    }
})


btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-visible')
})






const nav = document.getElementById('nav');
const navH1 = document.getElementById('nav__h1');
const menuEnlacesArray = Array.from(document.querySelectorAll('.menu__a'));

window.addEventListener('scroll', () => {
    nav.classList.toggle("down-menu", window.scrollY>50);
    navH1.classList.toggle("down-menu-h1", window.scrollY>50);
    //menu__a.classList.toggle("menu-a-color-black", window.scrollY>50);
    menuEnlacesArray.forEach((element) => {
        element.classList.toggle("menu-a-color-black", window.scrollY>50);
    })
    menuEnlacesArray[0].classList.remove('menu-a-color-black');
})



