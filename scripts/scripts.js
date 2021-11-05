//Codigo del boton menu header(para movil).
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-visible')
})


//Codigo menu slider correspondiente al header.
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


//Codigo menu slider correspondiente a la section testimonials
const testimonialsMenuSlider = document.getElementById('testimonials-menu-slider');
const arrayTestimonials = document.querySelectorAll('.target-testimonials__li');
const arrayButtonsSliderTestimonials = document.querySelectorAll('.testimonials-menu-slider__button');

testimonialsMenuSlider.addEventListener('click', (e) => {
    arrayButtonsSliderTestimonials.forEach(button => {
        if(button.id == e.target.id) {
            arrayTestimonials.forEach(itemTestimony => {
                if(button.id.slice(-1) == itemTestimony.id.slice(-1)) {
                    arrayTestimonials.forEach(el => {
                        el.classList.remove('order')
                    })
                    arrayButtonsSliderTestimonials.forEach(el => {
                        el.classList.remove('testimonials-menu-slider__button--modified', 'background-color-slider-testimonials');
                    })
                    itemTestimony.classList.add('order');
                    button.classList.add('background-color-slider-testimonials');
                }
            })
        }
    })
})



//Codigo correspondiente al nav, background-color blanco al hacer scroll
const nav = document.getElementById('nav');
const navH1 = document.getElementById('nav__h1');
const menuEnlacesArray = Array.from(document.querySelectorAll('.menu__a'));

window.addEventListener('scroll', () => {
    nav.classList.toggle("down-menu", window.scrollY>50);
    navH1.classList.toggle("down-menu-h1", window.scrollY>50);
    menuEnlacesArray.forEach((element) => {
        element.classList.toggle("menu-a-color-black", window.scrollY>50);
    })
    menuEnlacesArray[0].classList.remove('menu-a-color-black');
})