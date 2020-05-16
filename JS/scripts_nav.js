const slider = document.getElementById('slider');
const burger = document.querySelector('header > i');
const close = document.querySelector('#slider > i')

burger.addEventListener('click', () => {
     slider.classList.toggle('active_slider');
})

close.addEventListener('click', () => {
     slider.classList.toggle('active_slider');
})