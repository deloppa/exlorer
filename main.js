let btn = document.querySelector('.mobile-menu');
let menu = document.querySelector('.menu');



btn.addEventListener('click', function () {
    menu.classList.toggle('active');
    console.log('click');
});