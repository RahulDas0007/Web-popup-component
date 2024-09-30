const getPopupBtn = document.querySelector('.get-popup-btn')
const subscribeBtn = document.querySelector('.subscribe-btn')
const buttonContainer = document.querySelector('.button-container')
const popupContainer = document.querySelector('.popup-container')
const closeIcon = document.querySelector('.close-icon')
const input = document.querySelector('input')

getPopupBtn.addEventListener('click',(e) => { 
    e.stopPropagation()
    buttonContainer.classList.add('popup-btn-deactive')
    popupContainer.classList.add('active')
 })

closeIcon.addEventListener('click',() => { 
    buttonContainer.classList.remove('popup-btn-deactive')
    popupContainer.classList.remove('active')
 })

window.addEventListener('click',() => { 
    buttonContainer.classList.remove('popup-btn-deactive')
    popupContainer.classList.remove('active')
 })

 popupContainer.addEventListener('click',(e) => { 
    e.stopPropagation()
  })

input.addEventListener('submit',() => { 
    e.stopPropagation()
        buttonContainer.classList.add('popup-btn-deactive')
        popupContainer.classList.add('active')
 })

input.addEventListener('input',() => { 
    window.addEventListener('click',() => {     
        buttonContainer.classList.add('popup-btn-deactive')
    popupContainer.classList.add('active')
     })
 })

