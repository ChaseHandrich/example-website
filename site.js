
const h1 = document.querySelector('h1')
h1.textContent = "Chase's awesome webpage"

const copyright = document.querySelector('footer p')
copyright.textContent = "Bla"

const link= document.querySelector('.active')
link.style.color = "#ff0000"
link.style.textDecoration = "underline"

const contactlink = document.querySelector('#contact')
contactlink.style.fontWeight = "bold"

const links = document.querySelectorAll('nav a')
links.forEach(link => link.style.textDecoration = 'underline')