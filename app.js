

const div = document.querySelector('.div')
const x = document.querySelector('.x')
const y = document.querySelector('.y')


console.log(div)

div.addEventListener('mousemove', (ev) => {
    /*console.log('x:', ev.clientX, 'y:', ev.clientY)*/
    const elementX = ev.clientX
    x.innerHTML = elementX;
    const elementY = ev.clientY
    y.innerHTML = elementY;
})


div.addEventListener('mouseover', (ev) => {
    div.style.backgroundColor = "#008000";
})

div.addEventListener('mouseout', (ev) => {
    div.style.backgroundColor = "#fff";
})
