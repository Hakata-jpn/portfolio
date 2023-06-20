const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {
  toggle: false
})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        console.log(l)
        if(bsCollapse._isShown()){
            bsCollapse.hide();
            console.log(l.href)
            let str = l.href
             str = str.substring(str.indexOf("#") + 1)
             console.log(str)
            document.getElementById(str).scrollIntoView(str)
        }
    })
})