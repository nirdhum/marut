const navSection = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
        navSection.style.background = `#FFF`
        navSection.style.boxShadow = `0px 3px 5px 1px rgba(0, 0, 0, 0.1)`
    }
    else {
        navSection.style.background = `transparent`
        navSection.style.boxShadow = `none`
    }
})