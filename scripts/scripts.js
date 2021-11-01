const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

const menuSlider = document.getElementById('menu-slider');
const itemSlider1 = document.querySelector('.slider__li--1')
const itemSlider2 = document.querySelector('.slider__li--2')
const itemSlider3 = document.querySelector('.slider__li--3')
const buttonSlider1 = document.getElementById('btn-menu-slider1')
const buttonSlider2 = document.getElementById('btn-menu-slider2')
const buttonSlider3 = document.getElementById('btn-menu-slider3')

menuSlider.addEventListener('click', (e) => {
    if(e.target.id == "btn-menu-slider1"){
        itemSlider1.classList.add("mostrar-banner-slider");
        itemSlider2.classList.remove("mostrar-banner-slider");
        itemSlider3.classList.remove("mostrar-banner-slider");

        buttonSlider1.classList.add('color-button-slider');
        buttonSlider2.classList.remove('color-button-slider');
        buttonSlider3.classList.remove('color-button-slider');
    }
    else if(e.target.id == "btn-menu-slider2"){
        itemSlider1.classList.remove("mostrar-banner-slider");
        itemSlider2.classList.add("mostrar-banner-slider");
        itemSlider3.classList.remove("mostrar-banner-slider");

        buttonSlider1.classList.remove('color-button-slider', 'menu-slider__div--modified-1');
        buttonSlider2.classList.add('color-button-slider');
        buttonSlider3.classList.remove('color-button-slider');
    }
    else if(e.target.id == "btn-menu-slider3"){
        itemSlider1.classList.remove("mostrar-banner-slider");
        itemSlider2.classList.remove("mostrar-banner-slider");
        itemSlider3.classList.add("mostrar-banner-slider");

        buttonSlider1.classList.remove('color-button-slider', 'menu-slider__div--modified-1');
        buttonSlider2.classList.remove('color-button-slider');
        buttonSlider3.classList.add('color-button-slider');
    }

    //e.target.classList.add('color-button-slider');
})





btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-visible')
})
