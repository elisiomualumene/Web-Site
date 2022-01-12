let input = document.querySelector('.password')
let placeholder = document.querySelector('.password').placeholder
let button = document.querySelector('.submit')
let div = document.querySelector('.div')

var message = []

button.addEventListener('click', () =>{
   

     if(input.value == 'elisio'){

        window.location.href = './Page/index/home.html'
    }

    if (input.value != 'elisio' || input.value == '' || input.value == null){
        message.push('SENHA INCORRETA!')
        div.innerHTML = message
        message = []
    }
    
})


let show = document.querySelector('.show')
let close = document.querySelector('.bi-eye-slash')
let open = document.querySelector('.bi-eye')

show.addEventListener('click', () =>{
    input.type = 'text'
    close.style.display = 'none'
    open.style.display = 'block'
})

show.addEventListener('dblclick', () =>{
    input.type = 'password'
    close.style.display = 'block'
    open.style.display = 'none'
})


var cache

function spin() {
    cache = setTimeout(showpage, 1500)
}


function showpage(){
    document.querySelector('.spinner').style.display = 'none'
    document.querySelector('.const').style.display = 'block'
}