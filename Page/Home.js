let button = document.getElementById('button')

button.addEventListener('click', () => {
    window.scroll(00,700)
})


let spinner2 = document.querySelector('.spinner2')
let show2 = document.querySelector('#show2')


var cache2

function spin2() {
    cache2 = setTimeout(showpage2, 1200)
}

function showpage2(){
    spinner2.style.display = 'none'
    show2.style.display = 'block'
}
