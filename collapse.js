const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {
  toggle: false
})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if(bsCollapse._isShown()){
            bsCollapse.hide()
        }
    })
})