const feedback = document.querySelector('.flex-feedback')
const thankyou = document.querySelector('.flex-thankyou')
const rated = document.querySelector('#rate')


function thankyouPage() {
    feedback.classList.add('display-none')
    thankyou.classList.remove('display-none')
}

const rating = 3

rated.innerText = rating