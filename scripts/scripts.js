const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

const menuSlider = document.getElementById('menu-slider');
menuSlider.addEventListener('click', (e) => {
    console.dir(e.target)
})





btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-visible')
})
