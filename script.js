let form = document.getElementById('contact-form')

let footer = document.getElementById('doc-footer')
toTopButton.addEventListener('click', backTop)

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