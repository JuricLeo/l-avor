window.addEventListener("popstate", detectHistory);
function detectHistory() {
    lightbox.classList.remove('active')
}

const gumb1 = document.getElementById("button1")
gumb1.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb2 = document.getElementById("button2")
gumb2.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb3 = document.getElementById("button3")
gumb3.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb4 = document.getElementById("button4")
gumb4.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const gumb5 = document.getElementById("button5")
gumb5.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

const kuhinjabtn = document.querySelector('#kuhinja')
kuhinjabtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#kuhinja-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    window.history.pushState({id:1}, null, "?kuhinja")
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const kupaonicabtn = document.querySelector('#kupaonica')
kupaonicabtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#kupaonica-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    window.history.pushState({id:1}, null, "?kupaonica")
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const dnevnibtn = document.querySelector('#dnevni')
dnevnibtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#dnevni-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    window.history.pushState({id:1}, null, "?dnevni")
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})

const posebnibtn = document.querySelector('#posebni')
posebnibtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#posebni-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    window.history.pushState({id:1}, null, "?posebni")
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})




/*
const eksterijerbtn = document.querySelector('#eksterijer')
eksterijerbtn.addEventListener('click', e => {
    lightbox.classList.add('active')
    const upit = document.querySelector('#eksterijer-lightbox')
    upit.style.display = 'block'
    upit.src = upit.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(upit)
})
*/


