const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn-menu');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.menu a');

const toggleMenu = () => {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-active')
}

function closeMenu() {
    menu.classList.remove('active');
    btn.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-active');
}

btn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);
links.forEach(link => link.addEventListener('click', closeMenu));