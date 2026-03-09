document.body.classList.add("fade");

/* CLOCK */

function updateClock(){
const now=new Date();
const clock=document.getElementById("clock");
if(clock){
clock.innerText="⏱ "+now.toLocaleTimeString();
}
}
setInterval(updateClock,1000);


/* ROBOT GREETER */

/* ROBOT GREETER FIX */

let robotVoices = [];

function loadVoices(){
    robotVoices = speechSynthesis.getVoices();
}

speechSynthesis.onvoiceschanged = loadVoices;

function robotGreeting(){

const message = "Welcome to Tech Fest 2026. Innovation, coding and robotics start here.";

if('speechSynthesis' in window){

    const speech = new SpeechSynthesisUtterance(message);

    speech.rate = 0.9;
    speech.pitch = 1.1;
    speech.volume = 1;

    if(robotVoices.length > 0){
        speech.voice = robotVoices[0];
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(speech);

}else{

    alert("Speech synthesis not supported in this browser.");

}

}


/* LEADERBOARD */

let scores=[
{name:"Team Alpha",score:120},
{name:"Team Cyber",score:110},
{name:"Team Matrix",score:95},
{name:"Team Hackers",score:90}
];

function updateLeaderboard(){

const table=document.getElementById("leaderboard");
if(!table) return;

table.innerHTML="";

scores.forEach(team=>{

const row=`
<tr>
<td>${team.name}</td>
<td>${team.score}</td>
</tr>
`;

table.innerHTML+=row;

team.score+=Math.floor(Math.random()*5);

});
}

setInterval(updateLeaderboard,3000);


/* EVENT PROGRESS */

let progress=0;

function updateProgress(){

const bar=document.getElementById("progressBar");
if(!bar) return;

progress+=5;

if(progress>100) progress=100;

bar.style.width=progress+"%";

}

setInterval(updateProgress,4000);
