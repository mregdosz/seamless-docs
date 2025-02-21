window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    if (scrollPosition > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});