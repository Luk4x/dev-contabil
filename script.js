let form = document.getElementById('contact-form')
let footer = document.getElementById('doc-footer')
let btnMobile = document.querySelector('#mobile-menu-btn')
let nav2 = document.querySelector('.nav2')

toTopButton.addEventListener('click', backTop)
btnMobile.addEventListener('click', toggleMMneu)

function contactButton() {
    if (form.className == 'invisible-form') {
        form.className = 'visible-form'
    } else {
        form.className = 'invisible-form'
    }
}

function backTop() {
    scrollTo({top: 0, left: 0, behavior: 'smooth'})
}

function toggleMMneu() {
    nav2.classList.toggle('active')
}