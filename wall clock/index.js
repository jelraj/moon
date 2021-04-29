// setInterval(setClock, 1000);

// const hourHand = document.querySelector('ata-hour-hand')
// const minuteHand = document.querySelector('data-minute-hand')
// const secondHand = document.querySelector('data-second-hand')

// function setClock(){
//     const currentDate = new Date()
//     const secondsRatio = currentDate.getSeconds() / 60
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

//     setRotation(secondHand, secondsRatio)
//     setRotation(minuteHand, minutesRatio)
//     setRotation(hourHand, hoursRatio)
// }

// function setRotation (element, rotationRatio) {
//     element.style.setProperty('--rotate', rotationRatio * 360)
// }

function toggleClass(){
    const body = document.querySelector('body');
    body.classList.toggle('light') 
}

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval( () => {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})

