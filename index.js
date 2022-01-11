let input = document.querySelector('.password')
let placeholder = document.querySelector('.password').placeholder
let button = document.querySelector('.submit')
let div = document.querySelector('.div')

var message = []

button.addEventListener('click', () =>{
     if(input.value == 'elisio'){
         localStorage.setItem(acesso, true)
        window.location.href = './main/index.html'
    }

    if (input.value != 'elisio' || input.value == '' || input.value == null){
        message.push('SENHA INCORRETA!')
        div.innerHTML = message
        message = []
    }
    
})