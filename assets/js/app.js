
// Srcooling
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if(this.scrollY > 0) {
        navbar.classList.remove('py-2')
        navbar.classList.add('shadow-sm', 'py-1')
    } else {
        navbar.classList.add('py-1')
        navbar.classList.remove('shadow-sm', 'py-2')
    }
})

// AOS initiation
AOS.init({
    duration: 700
});