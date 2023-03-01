const hamburger = document.querySelector('.navburger');
const navMenu = document.querySelector('.navmenu');
const navLinks = document.querySelectorAll('.navlink');
const navBar = document.querySelector('.navbar')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.navlink').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

navBar.addEventListener('click', (event) => {
    const id = event.target.dataset.id;

    if (id) {
        navLinks.forEach((navlink) => {
            navlink.classList.remove('active');
        })
        event.target.classList.add('active');
    }
})
