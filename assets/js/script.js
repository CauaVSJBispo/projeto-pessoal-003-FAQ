const question = document.querySelectorAll('.question-btn')

const answer = document.querySelectorAll('.answer')

const arrow = document.querySelectorAll('.arrow')

question.forEach((question, indice)=>{
    question.addEventListener('click', ()=>{
        if (answer[indice].classList.contains('active')){
            answer[indice].classList.remove('active')
            question.classList.remove('active')
            arrow[indice].classList.remove('active')
        } else{
            answer[indice].classList.add('active')
            question.classList.add('active')
            arrow[indice].classList.add('active')
        }
    })
})



