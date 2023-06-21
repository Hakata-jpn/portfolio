const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {
  toggle: false
})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if(bsCollapse._isShown()){
            bsCollapse.hide();
            let str = l.href
             str = str.substring(str.indexOf("#") + 1)
            document.getElementById(str).scrollIntoView(str)
            
        }
    })
})


console.log("Hi there! If you're here, that means you were peeking at my code. I'm still looking for work and would love to catch up at hello@blandingdesign.com.")
console.log("Also, apologies if the mobile iteration is struggling. There is an issue with my bootstrap header that is being worked on for mobile size.") 