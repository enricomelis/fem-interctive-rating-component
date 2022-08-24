const feedback = document.querySelector('.flex-feedback')
const thankyou = document.querySelector('.flex-thankyou')
const rated = document.querySelector('#rate')
const rateOne = document.querySelector('#rate-one')
const rateTwo = document.querySelector('#rate-two')
const rateThree = document.querySelector('#rate-three')
const rateFour = document.querySelector('#rate-four')
const rateFive = document.querySelector('#rate-five')


function thankyouPage() {
    feedback.classList.add('display-none')
    thankyou.classList.remove('display-none')
}

function rateSaver(vote){
    rated.innerText = vote
}

function circleClickStyle(rate){
    rate.style.backgroundColor = "hsl(217, 12%, 63%)"
    rate.style.color = "hsl(0, 0%, 100%)"
}

rateOne.addEventListener('click', () => {
    circleClickStyle(rateOne)
})

rateTwo.addEventListener('click', () => {
    circleClickStyle(rateTwo)
})

rateThree.addEventListener('click', () => {
    circleClickStyle(rateThree)
})

rateFour.addEventListener('click', () => {
    circleClickStyle(rateFour)
})

rateFive.addEventListener('click', () => {
    circleClickStyle(rateFive)
})

console.log('5')