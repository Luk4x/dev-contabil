let form = document.getElementById('contact-form')

let footer = document.getElementById('doc-footer')
toTopButton.addEventListener('click', backTop)

function contactButton() {
    form.className = 'visible-form'
}

function backTop() {
    scrollTo({top: 0, left: 0, behavior: 'smooth'})
}