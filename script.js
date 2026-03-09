// Live Clock
function updateClock(){

let now = new Date()

let time = now.toLocaleTimeString()

let clock = document.getElementById("clock")

if(clock){
clock.innerText = "Time: " + time
}

}

setInterval(updateClock,1000)



// Leaderboard score simulation
function updateScores(){

let scores = document.querySelectorAll(".score")

scores.forEach(score =>{

let current = parseInt(score.innerText)

let random = Math.floor(Math.random()*10)

score.innerText = current + random

})

}

setInterval(updateScores,5000)



// Robot Voice Welcome
function robotSpeak(){

let message = "Welcome to Tech Fest 2026. Please proceed to registration."

let speech = new SpeechSynthesisUtterance(message)

speech.rate = 0.9

speech.pitch = 1.2

speechSynthesis.speak(speech)

}



// Page Fade Animation
document.addEventListener("DOMContentLoaded",()=>{

document.body.style.opacity = 0

setTimeout(()=>{

document.body.style.transition = "opacity 1s"

document.body.style.opacity = 1

},100)

})