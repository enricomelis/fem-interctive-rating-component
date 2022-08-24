const feedback = document.querySelector('.flex-feedback')
const thankyou = document.querySelector('.flex-thankyou')
const rated = document.querySelector('#rate')
const rateOne = document.querySelector('#rate-one')
const rateTwo = document.querySelector('#rate-two')
const rateThree = document.querySelector('#rate-three')
const rateFour = document.querySelector('#rate-four')
const rateFive = document.querySelector('#rate-five')
const submitBtn = document.querySelector('#submit-btn')


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

submitBtn.addEventListener('click', () => {
    thankyouPage()
})

rateOne.addEventListener('click', () => {
    circleClickStyle(rateOne)
    rateSaver(1)
})

rateTwo.addEventListener('click', () => {
    circleClickStyle(rateTwo)
    rateSaver(2)
})

rateThree.addEventListener('click', () => {
    circleClickStyle(rateThree)
    rateSaver(3)
})

rateFour.addEventListener('click', () => {
    circleClickStyle(rateFour)
    rateSaver(4)
})

rateFive.addEventListener('click', () => {
    circleClickStyle(rateFive)
    rateSaver(5)
})